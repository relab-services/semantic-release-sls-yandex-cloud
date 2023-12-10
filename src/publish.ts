import { PublishContext } from "semantic-release";
import { Config, resolveConfig } from "./config";
import { exec } from "./exec";

async function publish(config: Config, context: PublishContext) {
  const options = resolveConfig(config);
  await exec(
    "npx serverless deploy",
    {
      $YC_OAUTH_TOKEN: options.token,
      $YC_CLOUD_ID: options.cloudId,
      $YC_FOLDER_ID: options.folderId,
      $YC_DEFAULT_ZONE: options.defaultZone,
    },
    {
      cwd: context.cwd,
      stdout: context.stdout,
      stderr: context.stderr,
    }
  );
}

export { publish };
