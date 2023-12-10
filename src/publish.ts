import { PublishContext } from "semantic-release";
import { Config, resolveConfig } from "./config";

async function publish(config: Config, context: PublishContext) {
  context.logger.log(`Publish: ${JSON.stringify(JSON.stringify(resolveConfig(config)))}`);
}

export { publish };
