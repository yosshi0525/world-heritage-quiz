#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AmplifyHostingStack } from "../lib/world-heritage-quiz-stack";

const app = new cdk.App();
new AmplifyHostingStack(app, "WorldHeritageQuiz", {
	owner: "yosshi0525",
	repository: "world-heritage-quiz",
});
