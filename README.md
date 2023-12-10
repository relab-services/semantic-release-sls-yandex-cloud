# @sergeyzwezdin/semantic-release-sls-yandex-cloud
[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to deploy serverless app to [yandex cloud](https://github.com/yandex-cloud/serverless-plugin)

## Install

Add the plugin to your npm-project:

```bash
$ npm @sergeyzwezdin/semantic-release-sls-yandex-cloud -D
```

## Usage

The plugin can be configured in the [semantic-release configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@sergeyzwezdin/semantic-release-sls-yandex-cloud"
    ]
}
```
 
Once it configured, the plugin creates `~/.config/yandex-cloud/config.yaml` file and run `npx serverless deploy` for your project.

## Configuration

### Yandex Cloud serverless app

Follow [the instructions](https://github.com/yandex-cloud/serverless-plugin) to create serverless app for Yandex Cloud

### Environment variables

The `YC_OAUTH_TOKEN`, `YC_CLOUD_ID`, `YC_FOLDER_ID` and `YC_DEFAULT_ZONE` can be defined in the environment where you will run semantic release.
As an alternative you can pass it via options.

### Options

| Option          | Description                                                                                       | Required | Default            |
|:----------------|:--------------------------------------------------------------------------------------------------|:---------|:-------------------|
| `token`         | OAuth token to deploy YC app                                                                      | yes      | `YC_OAUTH_TOKEN`   |
| `cloudId`       | Cloud ID in Yandex Cloud                                                                          | yes      | `YC_CLOUD_ID`      |
| `folderId`      | Folder ID in Yandex Cloud                                                                         | yes      | `YC_FOLDER_ID`     |
| `defaultZone`   | [Availability zone](https://cloud.yandex.com/en/docs/overview/concepts/geo-scope) in Yandex Cloud | yes      | `YC_DEFAULT_ZONE`  |

## Examples

```json
{
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@sergeyzwezdin/semantic-release-sls-yandex-cloud",
            {
                "token": "<-- YOUR OAUTH TOKEN -->",
                "cloudId": "<-- CLOUD ID -->",
                "folderId": "<-- FOLDER ID -->",
                "defaultZone": "<-- ZONE -->"
            }
        ]
    ]
}
```

[MIT Licence](LICENSE)
