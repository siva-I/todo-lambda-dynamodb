const AWS = require('aws-sdk')

const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports.run = async (event) => {
  const params = {
    TableName: 'todos',
    key: {
      id: event.pathParameters.id
    }
  }
  const result = await dynamoDb.get(params).promise()
  if (result.Item) {
    return {
      statusCode: 200,
      body: JSON.stringify(result.Item)
    }
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({message: 'Todo not found'})
    }
  }
}

module.exports.all = async (event) => {
  const params = {
    TableName: 'todos'
  }
  const result = await dynamoDb.scan(params).promise()
  if (result.Items) {
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items)
    }
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({message: 'No Todos found'})
    }
  }
}
