#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkProjectStack } from '../lib/cdk-project-stack';

const app = new cdk.App();
new CdkProjectStack(app, 'CdkProjectStack', {
 
});