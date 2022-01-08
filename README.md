# React-AppID sample

## Overview

React app with IBM AppID


## References

https://www.ibm.com/cloud/blog/secure-your-single-page-react-apps-using-app-id


## How to create this app.

1. Follow above refernce page.

2. Add `http://localhost:3000` and `http://localhost:8080` as **redirect_uri** of IBM AppID.

  - If you use Github Pages as web host, you need to specify `https://xxxx.github.io` as redirect_uri.

3. `$ npm start` / `$ node app`


## How to prepare for statis web server.

1. `$ npm run build`

2. Edit `build/index.html` to use relative path.


## How to push build/ folder into `gh-pages` branch of github.

1. `$ git subtree push --prefix build origin gh-pages`


## Copyright

2022 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.

