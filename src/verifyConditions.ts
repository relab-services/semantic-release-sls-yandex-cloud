import { VerifyConditionsContext } from "semantic-release";
// import * as SemanticReleaseError from "@semantic-release/error";
import { Config } from "./config";

async function verifyConditions(config: Config, context: VerifyConditionsContext) {
  context.logger.log(`Verify Conditions: ${JSON.stringify(config)}`);
}

export { verifyConditions };
