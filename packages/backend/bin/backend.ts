#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { WorldHeritageQuizStack } from "../lib/world-heritage-quiz-stack";

const app = new cdk.App();
new WorldHeritageQuizStack(app, "WorldHeritageQuiz");
