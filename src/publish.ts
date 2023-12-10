import { PublishContext } from "semantic-release";
import { Config } from "./config";

async function publish(config: Config, context: PublishContext) {
  context.logger.log(`Publish: ${JSON.stringify(config)}`);
}

export { publish };
