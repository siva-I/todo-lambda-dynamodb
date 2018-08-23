# todo-lambda-dynamodb

![todo-lambda-dynamodb](../master/node-lambda.png?raw=true)

Todo store using [Amazon Lambda](http://aws.amazon.com/lambda/) and [DynamoDb](https://aws.amazon.com/dynamodb/) table implemented in node.js.

## Installation

**Install Dependencies**

```
$ brew install awscli
$ npm install
```

 **Deploy the Lambda to AWS**

```
$ sls deploy
```
## Usage

There are 3 available services.

 **Get a particular todo**
```
$ curl https://68ckadw01m.execute-api.us-east-1.amazonaws.com/dev/todos/24e6cba7-e18b-4dad-90b3-ddd3eee48e15

```

 **Get all todos**
```
$ curl https://68ckadw01m.execute-api.us-east-1.amazonaws.com/dev/todos/all

```

  **Create a todo**
```
$ curl -X POST https://68ckadw01m.execute-api.us-east-1.amazonaws.com/dev/todos --data '{"text": "Schedule meeting" }'

```
