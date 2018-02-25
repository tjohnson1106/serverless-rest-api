"use strict";

const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDb.DocumentClient({
  region: "locahost",
  endpoint: "http://localhost:8000"
}); //remove when deploying

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    })
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
