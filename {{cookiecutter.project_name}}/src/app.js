const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;
const HASHKEY_KEY = `${TABLE_NAME}_hash`;
const RANGE_KEY = `${TABLE_NAME}_range`;

exports.lambdaHandler = async (eventObject, context) => {
  const eventRecord = eventObject.Records && eventObject.Records[0],
    inputBucket = eventRecord.s3.bucket.name,
    key = eventRecord.s3.object.key,
    id = context.awsRequestId


  console.log('creating entry', inputBucket, key, 'to', TABLE_NAME);
  var data
  data['key']=key
  data[HASHKEY_KEY]=Date.now()
  data[RANGE_KEY]=inputBucket

  var params = {
    TableName: TABLE_NAME,
    Item: data
  };

  return docClient.put(params)
    .promise()
    .then(response => response)
    .catch(err => {
      console.log(err);
      return err;
    });
};
