export type Config = {
  token?: string;
  cloudId?: string;
  folderId?: string;
  defaultZone?: string;
};

export const resolveConfig = (options?: Partial<Config>): Config => {
  return {
    token: options?.token ?? process.env.YC_OAUTH_TOKEN,
    cloudId: options?.cloudId ?? process.env.YC_CLOUD_ID,
    folderId: options?.folderId ?? process.env.YC_FOLDER_ID,
    defaultZone: options?.defaultZone ?? process.env.YC_DEFAULT_ZONE,
  };
};
