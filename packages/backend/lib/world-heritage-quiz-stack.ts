import {
	App,
	GitHubSourceCodeProvider,
	RedirectStatus,
} from "@aws-cdk/aws-amplify-alpha";
import { CfnOutput, SecretValue, Stack, type StackProps } from "aws-cdk-lib";
import { BuildSpec } from "aws-cdk-lib/aws-codebuild";
import type { Construct } from "constructs";

interface HostingStackProps extends StackProps {
	readonly owner: string;
	readonly repository: string;
	readonly environmentVariables?: { [name: string]: string };
}

export class AmplifyHostingStack extends Stack {
	constructor(scope: Construct, id: string, props: HostingStackProps) {
		super(scope, id, props);
		const amplifyApp = new App(this, "AmplifyCDK", {
			appName: "World Heritage Quiz",
			sourceCodeProvider: new GitHubSourceCodeProvider({
				owner: props.owner,
				repository: props.repository,
				oauthToken: SecretValue.unsafePlainText(process.env.GITHUB_TOKEN ?? ""),
			}),
			autoBranchDeletion: true,
			customRules: [
				{
					source: "/<*>",
					target: " /index.html",
					status: RedirectStatus.NOT_FOUND_REWRITE,
				},
			],
			environmentVariables: props.environmentVariables,
			buildSpec: BuildSpec.fromObjectToYaml({
				version: 1,
				frontend: {
					phases: {
						preBuild: {
							commands: [
								"curl -fsSL https://bun.sh/install | bash",
								'export PATH="$HOME/.bun/bin:$PATH"',
								"bun install",
							],
						},
						build: {
							commands: ["bun run build"],
						},
					},
					artifacts: {
						baseDirectory: ".next",
						files: ["**/*"],
					},
					cache: {
						paths: ["node_modules/**/*"],
					},
				},
				appRoot: "packages/frontend",
			}),
		});

		amplifyApp.addBranch("main", {
			stage: "PRODUCTION",
		});

		new CfnOutput(this, "appId", {
			value: amplifyApp.appId,
		});
	}
}
