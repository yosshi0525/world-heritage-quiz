import { test } from "bun:test";
import * as cdk from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import * as Backend from "../lib/world-heritage-quiz-stack";

test("SQS Queue and SNS Topic Created", () => {
	const app = new cdk.App();
	// WHEN
	const stack = new Backend.WorldHeritageQuizStack(app, "MyTestStack");
	// THEN

	const template = Template.fromStack(stack);

	template.hasResourceProperties("AWS::SQS::Queue", {
		VisibilityTimeout: 300,
	});
	template.resourceCountIs("AWS::SNS::Topic", 1);
});
