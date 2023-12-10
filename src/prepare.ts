import { PrepareContext } from "semantic-release";
import * as path from "path";
import { existsSync } from "fs";
import * as fs from "fs/promises";
import { Config, resolveConfig } from "./config";

async function prepare(config: Config, context: PrepareContext) {
  const options = resolveConfig(config);
  const configPath = path.resolve(process.env.HOME ?? "", ".config/yandex-cloud/config.yaml");

  context.logger.log(`Config path: ${configPath}`);

  context.logger.log(`Base path ${path.dirname(configPath)} exists: ${existsSync(path.dirname(configPath))}`);
  if (!existsSync(path.dirname(configPath))) {
    await fs.mkdir(path.dirname(configPath), {
      recursive: true,
    });

    context.logger.log(`Base dir ${path.dirname(configPath)} created`);
  }

  const content = `current: default
profiles:
  default:
    token: ${options.token}
    cloud-id: ${options.cloudId}
    folder-id: ${options.folderId}
    compute-default-zone: ${options.defaultZone}`;

  context.logger.log(`Writing configuration to ${configPath}\n${content}`);
  await fs.writeFile(configPath, content, { encoding: "utf-8" });
  context.logger.log(`Writing configuration to ${configPath} done`);
}

export { prepare };
