import { Config, resolveConfig } from "./config";
import * as path from "path";
import { existsSync } from "fs";
import * as fs from "fs/promises";

async function prepare(config: Config) {
  const options = resolveConfig(config);
  const configPath = path.resolve(process.env.HOME ?? "", "/.config/yandex-cloud/config.yaml");

  if (!existsSync(path.basename(configPath))) {
    await fs.mkdir(path.basename(configPath));
  }

  const content = `current: default
profiles:
  default:
    token: ${options.token}
    cloud-id: ${options.cloudId}
    folder-id: ${options.folderId}
    compute-default-zone: ${options.defaultZone}`;

  await fs.writeFile(configPath, content, { encoding: "utf-8" });
}

export { prepare };
