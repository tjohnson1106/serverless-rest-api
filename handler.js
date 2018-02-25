"use strict";

const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDb.DocumentClient({
  region: "locahost",
  endpoint: "http://localhost:8000"
}); //remove when deploying

module.exports.create = (event, context, callback) => {
  //create a note and store it in the database
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      content: data.content
    }
  };

  dynamoDb.put(params, error => {
    if (error) {
      console.error(error);
      return callback(null, {
        statusCode: error.statusCode || 500,
        headers: { "Content-Type": "text/plain" },
        body: "Could not create note"
      });
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item)
    };
    callback(null, response);
  });
};

module.exports.getOne = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("gets a single note")
  };
  callback(null, response);
};

module.exports.getAll = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("gets all notes")
  };
  callback(null, response);
};

module.exports.update = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("updates a note")
  };
  callback(null, response);
};

module.exports.delete = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("deletes a note")
  };
  callback(null, response);
};
