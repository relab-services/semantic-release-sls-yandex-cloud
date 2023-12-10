import * as SemanticReleaseError from "@semantic-release/error";
import { Config, resolveConfig } from "./config";

async function verifyConditions(config: Config) {
  const options = resolveConfig(config);

  if (!options.token) {
    throw new SemanticReleaseError(
      "No OAUTH token defined.",
      "ENOOAUTHTOKEN",
      "The OAuth token is neither defined in the options nor in the environment variable YC_OAUTH_TOKEN. Please make sure that the parameter has been defined."
    );
  }

  if (!options.cloudId) {
    throw new SemanticReleaseError(
      "No OAUTH token defined.",
      "ENOCLOUDID",
      "The OAuth token is neither defined in the options nor in the environment variable YC_CLOUD_ID. Please make sure that the parameter has been defined."
    );
  }

  if (!options.folderId) {
    throw new SemanticReleaseError(
      "No OAUTH token defined.",
      "ENOFOLDERID",
      "The OAuth token is neither defined in the options nor in the environment variable YC_FOLDER_ID. Please make sure that the parameter has been defined."
    );
  }

  if (!options.defaultZone) {
    throw new SemanticReleaseError(
      "No OAUTH token defined.",
      "ENODEFAULTZONE",
      "The OAuth token is neither defined in the options nor in the environment variable YC_DEFAULT_ZONE. Please make sure that the parameter has been defined."
    );
  }
}

export { verifyConditions };
