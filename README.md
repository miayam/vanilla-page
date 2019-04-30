# Vanilla Page

This is a simple landing page built with `Pug`, `SCSS`, and vanilla `JavaScript`. It must be tempting to use `create-react-app` for every pet project, but we are missing out a lot of features React has to offer if we use it for a dead-simple landing page. I've heard many times some eccentric German philosphers said "the best design is as little design as possible". I think for a web development, "the best web app is as little tooling, libraries, frameworks, and jargons as possible" :laughing:.

## Atomic Design Methodology + BEM + Common Sense
Thanks to Daniel Tonon for [this great article](https://css-tricks.com/abem-useful-adaptation-bem/). He encourages us to combine modified BEM naming convention with atomic design methodology. He also wrote pros and cons for his approach and let us decide and manage the trade off.

## How About Component Based UI?
`Pug` is enough for a presentational component. I use `mixin` to separate elements of the page. It's dead simple but powerful. Thanks `Pug`!

## Setup

### 1. Installation
---
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
Somehow the `node-sass` causes problem. I don't know why, but just rebuild it whenever the dev server failed.
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
Here's how to deploy to Github Page.
```
$ yarn deploy
```

## What To Improve
1. Test the presentational JS using Jest. Currently it remains testless even if it works fine.
2. Add ServiceWorker so we can see the landing page offline.
3. Provide end to end testing (E2E) using Cypress. Well, it's just a dead simple landing page, but it would be awesome with E2E testing.


## Special Thanks
At first, it was just an entry test from [Cermati.com](https://cermati.com). It turns out I enjoy working on it and turn it into a pet project. The coding exercise focus on the end result and it's framework agnostic. I like it very much. Don't be fooled by its simplicity. Simplicity doesn't mean easy. Thanks to you guys at [https://engineering.cermati.com](https://engineering.cermati.com).

## Demo
Here is the [demo](https://miayam.io/vanilla-page). I am happy with the result. It loads pretty fast. To be honest it's more performant than React.js "Hello World!". It's a static prerendered page that still works without JavaScript!

### Audit
The last audit I did using lighthouse in simulated fast 3G.
![alt Audit](https://i.ibb.co/rQ6ZTRM/Screen-Shot-2019-04-28-at-16-57-06.png)

## Licence
MIT © [Muhammad D. Ramadhan](https://github.com/miayam).