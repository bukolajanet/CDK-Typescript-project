CDK/Typescript project



The `cdk.json` file tells the CDK Toolkit how to execute your app.

Description of the project:

1. create a nes directory for your project
2. cd into the new directory
3. run cdk init app --language typescript : to initialize the project 
4. run cdk synth : to synthensize the project i.e to create the CloudFormation template for the resources defined in the project
5. run cdk bootstrap : to create the CdKToolkit stack , this will server as tool to interact with AWS CDK app
6. run cdk deploy : to deploy your already written template 
7. run cdk destroy : to destroy the stack and resouces created 

