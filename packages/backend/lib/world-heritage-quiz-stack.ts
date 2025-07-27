import { Duration, Stack, type StackProps } from "aws-cdk-lib";
import * as sns from "aws-cdk-lib/aws-sns";
import * as subs from "aws-cdk-lib/aws-sns-subscriptions";
import * as sqs from "aws-cdk-lib/aws-sqs";
import type { Construct } from "constructs";

export class WorldHeritageQuizStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		const queue = new sqs.Queue(this, "BackendQueue", {
			visibilityTimeout: Duration.seconds(300),
		});

		const topic = new sns.Topic(this, "BackendTopic");

		topic.addSubscription(new subs.SqsSubscription(queue));
	}
}
