import { PrepareContext } from "semantic-release";
import { Config, resolveConfig } from "./config";

async function prepare(config: Config, context: PrepareContext) {
  context.logger.log(`Prepare: ${JSON.stringify(JSON.stringify(resolveConfig(config)))}`);
}

export { prepare };
