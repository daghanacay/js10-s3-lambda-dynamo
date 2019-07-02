# js10-s3-lambda-dynamo

checkout as 

sam init --location gh:daghanacay/js10-s3-lambda-dynamo

After you create your project then you can share it as application see https://github.com/daghanacay/sam-integration-project

aws s3 mb s3://sam-application-stacks
aws s3 sync . s3://sam-application-stacks/[application name]
