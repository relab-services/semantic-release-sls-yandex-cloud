import { PrepareContext } from "semantic-release";
import { Config } from "./config";

async function prepare(config: Config, context: PrepareContext) {
  context.logger.log(`Prepare: ${JSON.stringify(config)}`);
}

export { prepare };
