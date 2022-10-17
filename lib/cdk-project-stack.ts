import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';


export class CdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, 'bukolabucket', {
      bucketName: "bukolacdkprojectbucket"
      
    });

    
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      natGateways: 0,
    });

    
    

    

    
  }
}
