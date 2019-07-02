# js10-s3-lambda-dynamo

checkout as 

sam init --location gh:daghanacay/js10-s3-lambda-dynamo

After you create your project then you can share it as application see https://github.com/daghanacay/sam-integration-project

- aws s3 mb s3://sam-application-stacks
- aws s3 sync . s3://sam-application-stacks/[application name]

# Standalone deployment

There are two parameters you can set on this template.

InputS3BucketName:
    Default: s3-lambda-dynamo-input-bucket-daghan
DynamoDBTableName:
    Default: s3-lambda-dynamo-next

Exports the input bucket name as 
      Name: InputS3BucketNameExport

# SAM Integration snippet

```
Resources:
  detectSentimentAndWriteToDynamo:
    Type: AWS::Serverless::Application
    Properties:
      Location: https://s3.amazonaws.com/sam-application-stacks/detect-sentiment/template.yaml
      Parameters: 
        # InputS3BucketName: 's3-lambda-transcribe-input-audio-daghan'
        # DynamoDBTableName: 's3-lambda-transcribe-output-text-daghan' # Uncomment to override default value  
```