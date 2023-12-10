import { VerifyConditionsContext } from "semantic-release";
// import * as SemanticReleaseError from "@semantic-release/error";
import { Config, resolveConfig } from "./config";

async function verifyConditions(config: Config, context: VerifyConditionsContext) {
  context.logger.log(`Verify Conditions: ${JSON.stringify(resolveConfig(config))}`);
}

export { verifyConditions };
