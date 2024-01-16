# Renovate error reproduction

The checksum is only different for `eslint-plugin-exos` dependency when run in a renovate PR, but not when running yarn install on a mac developing locally nor when doing it on a github action.

https://github.com/renovatebot/renovate/discussions/26672

## Behavior as seen in this PR

https://github.com/cranberyxl/renovate-reproduction/pull/5/files

### Expected

no changes to the `checksum` of `eslint-plugin-exos`

### Actual

The checksum is changing in `yarn.lock`
