const Responses = require('../common/API_Responses.js');
const aws = require('aws-sdk');
const dynamo = new aws.DynamoDB.DocumentClient();

exports.handler = async event =>{

    const body = JSON.parse(event.body);
    const shortString = Math.random().toString(36).slice(2,7);

    if(!body || !body.url){        
        return Responses._400({message: "Empty body or missing URL"});
    }

    //add DB write logic here
    await dynamo.put({
        TableName: 'shortURL',
        Item:{
            shortURL: shortString,
            url: body.url,
        }
    }).promise()

    return Responses._200({shortString: shortString});
};
