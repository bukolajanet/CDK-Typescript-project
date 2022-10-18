import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';



export class CdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'bukolabucket', {
      bucketName: "bukolacdkprojectbucket"
      
    });

    
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      natGateways: 0,
    });

    const securityGroup = new ec2.SecurityGroup(this, 'sg', {
      vpc: vpc
  });

  const ec2Instance = new ec2.Instance(this,'ec2Instance', {
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
    machineImage: new ec2.AmazonLinuxImage(),
    vpc: vpc,
    securityGroup: securityGroup
})
    

    
  }
}
