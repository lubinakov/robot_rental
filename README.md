A simple react App displaying & filtering robots using public API (https://robohash.org/) and mock user data from (https://jsonplaceholder.typicode.com/). Built based on React section of Udemy ZTM tutorial (https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/).

# Custom Development:

- tailwindcss styling instead of tachyos
- express server instead of react-script
- dockerfile using node:alpine-lts for minimal install size
- fly.io configuration and deployment

# Usage:

## Run locally

- `$ git clone git@github.com:lubinakov/robot_rental.git`
- `$ npm install`
- `$ npm build`
- `$ node server`

## Deploy to Fly

- `$ fly launch` 
- `$ fly deply`
