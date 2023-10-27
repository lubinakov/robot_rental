A simple react App displaying & filtering robots using [public API](https://robohash.org/) and [mock user data](https://jsonplaceholder.typicode.com/). Built based on React section of [Udemy ZTM tutorial](https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/).

[View live app on Fly.io](https://robotrental.fly.dev/)

![App Image](/public/screenshot.jpg)

# Custom Development:

- tailwindcss styling instead of tachyos
- express server instead of react-script
- dockerfile using node:alpine-lts for minimal install size
- fly.io configuration and deployment

# Usage:

## Run locally

- `$ git clone git@github.com:lubinakov/robot_rental.git`
- `$ npm install`
- `$ npm run build`
- `$ node server`

## Deploy to Fly

- `$ fly launch`
- `$ fly deply`
