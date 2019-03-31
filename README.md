# nuxt-boilerplate

> For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build 
$ yarn build:report # for static files and a webpack-bundle analysis
$ yarn start

# generate static project
$ yarn generate

```

## Storybook
Storybook allows us to keep track of our widget library with a launchable UI. Using Storybook we can:
  - Manually test various component states
  - Allow designers to view, and keep track of, widgets currently being used in production
  - Avoid two devs creating the same component.

``` bash
# serve or build storybook
$ yarn storybook
$ yarn storybook:build # for static files
```

## Testing
We're using `jest` for our unit and e2e testing. When we run `test`, we launch both unit and e2e at the same time. If we use `test:debug`, we launch a Chrome instance to run the e2e tests. For more configuration over that process, refer to our `jest-puppeteer.config.js` file in the root directory.

``` bash
# run unit and e2e testing
$ yarn test 
$ yarn test:debug # to launch with chrome head
```

## Element UI
Since we're using Element UI, but we still want control over the colors,
we're using a special compilation process (detailed [here](https://element.eleme.io/#/en-US/component/custom-theme)) to generate our customized theme. Note: our `build` process, as well as our `dev` process,
will take care of this for us.

``` bash
$ yarn element:variables # generate a SCSS file where we can override variables
$ yarn element:generate # generate a theme directory using new custom variables
```
