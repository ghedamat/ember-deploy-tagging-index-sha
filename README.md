# ember-deploy-tagging-index-sha [![](https://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/plugins/ember-deploy-tagging-index-sha.svg)](http://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/)

A `tagging-adapter` implementation to be used with [ember-deploy](https://github.com/LevelbossMike/ember-deploy)

## Differences with the Default Tagging-Adapter
The default `tagging-adapter` that [ember-deploy](https://github.com/LevelbossMike/ember-deploy) ships with is designed to use the current project's SHA (through `git rev-parse HEAD`) as the tag.  This is not always ideal if the core code is modified through a symlink (e.g `npm link`) where the project's git repository itself is not updated and therefore does not provide a new value from `git rev-parse HEAD`.

`ember-deploy-tagging-index-sha` uses the current `dist/index.html`'s SHA representation as the tag. 

**Note:** This is only useful in an environment where asset fingerprinting is used.  The concept of this `tagging-adapter` relies on the fingerprints of the project's CSS or JS changing to generate a new SHA for `dist/index.html`

## Installation and Usage
Modify the `deploy.json` that [ember-deploy](https://github.com/LevelbossMike/ember-deploy) expects to specify a `tagging-adapter` for usage.  The relevant configuration key is `tagging` and the value for this adapter is `index-sha`.  An example for a production block is:
```js
{
   "production": {
    "store": {
      "host": "production-redis.example.com",
      "port": 6379,
      "password": "<your-redis-secret>"
    },
    "assets": {
      "accessKeyId": "<your-access-key-goes-here>",
      "secretAccessKey": "<your-secret-access-key-goes-here>",
      "bucket": "<your-bucket-name>"
    },
    "tagging": "index-sha"
  }
}
```
