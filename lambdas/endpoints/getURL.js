const Responses = require('../common/API_Responses.js');
const aws = require('aws-sdk');
const dynamo = new aws.DynamoDB.DocumentClient();

exports.handler = async event =>{
    
    if(!event.pathParameters || !event.pathParameters.URL ){
        //failed without shortURL
        return Responses._400({mseeage: 'missing the shortURL from the path'})
    }

    const itemID = event.pathParameters.URL;
    const record = await dynamo.get({
        TableName: "shortURL",
        Key: {
            shortURL : itemID
        }
    }).promise()
    
    if(!(record.Item)){
        return Responses._400({mseeage: `URL not found for ${itemID }`})
    }

    if (record) {
        return {
        statusCode: 302,
            headers: { Location: record.Item.url }
        };
    }

    return Responses._400({mseeage: `URL not found for ${itemID }`})


}