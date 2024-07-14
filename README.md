# Tutorial

[Micro-frontends Course - Beginner to Expert](https://www.youtube.com/watch?v=lKKsjpH09dU&t=83s)

## Notes

[Atomic Designs Methodology - Brad Frost] (https://atomicdesign.bradfrost.com/chapter-2/)

Organism unit of UI to share as Micro-Frontend - shopping cart.

Module Federation - Webpack 5 plus

Would not deploy this way. Would be build and then ship to a static asset store e.g. S3 to get CDN caching etc.

Servor just acts as a server. Has not special context. Good for testing in ./dist directory. Serve static files - just like S3.

PDP is the Host
Home is the Remote

PDP page is hosting in what is remote.

# Useful Commands

`pnpx create-mf-app\
cd home\
yarn && yarn start\
yarn start\
yarn build\
cd dist\
PORT=3000 npx servor\
yarn add react-router-dom\`
