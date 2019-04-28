# Vanilla Page

This is a simple landing page built with `Pug`, `SCSS`, and vanilla `JavaScript`. It must be tempting to use `create-react-app` for every pet project, but we are missing out a lot of features React has to offer if we use it for a dead-simple landing page.

## Atomic Design Methodolgy + BEM + Common Sense
Thanks to Daniel Tonon for [this great article](https://css-tricks.com/abem-useful-adaptation-bem/). He encourages us to combine modified BEM naming convention with atomic design methodology. He also wrote pros and cons for his approach and let us decide and manage the trade off.

## How About Component Based UI?
`Pug` is enough for a presentational component. I use `mixin` to separate elements of the page. It's dead simple but powerful. Thanks `Pug`!

## Setup

### 1. Installation
```sh
$ git clone [this repo URL] your_app
$ cd your_app
$ yarn install
```

### 2. Development
---
```sh
$ yarn start
```
Somehow the `node-sass` causes problom. I don't know why, but just rebuild it whenever the dev server failed.
```sh
$ npm rebuild node-sass --force
```

### 3. Build for Production
---
```sh
$ yarn build
```

### 4. Deployment
---
I decided to deploy the page to GitHub Page. Just delete this snippet on `src/config/webpack.prod.js` if you want to deploy to other platforms.
```js
output {
    publicPath: "/vanilla-page/"
}
```

## Demo
Here is the [demo](https://miayam.io/vanilla-page). I am happy with the result. It loads pretty fast. To be honest it's more performant than React.js "Hello World!". It's a static prerendered page that still works without JavaScript!

## Licence
MIT © [Muhammad D. Ramadhan](https://github.com/miayam).