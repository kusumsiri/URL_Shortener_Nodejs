variable "runtime" {
    description = "lambda function runtime env"
    type = string
    default = "nodejs18.x"
}

variable "function_name" {
    description = "Provide name to the lambda function"
    type = string
    default = "URL-Shortener"
}

variable "log_retention_in_days" {
    description = "Provide the number of days for log to be available in cloudwatch for this lambda function"
    type = number
    default = 1
}
