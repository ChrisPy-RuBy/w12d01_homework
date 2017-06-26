setup protocol

npm install --save express (starts node and epress)
npm install --save body-parser ()






For Webpack

create webpack.config.js file
Tell webpack to run by changing the package json to know how to run

i.e. update the package.json file to 

{
  "name": "webpack_start_point",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
  "start": "node server.js",
-->"build": "webpack -w"  <----

console - npm run build
--> nodemon server.js. (edit package.json that nodemon runs instead)

now add mocha to the webpack.config

  "name": "webpack_start_point",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "build": "webpack -w",
 -->>   "test": "mocha client/src/models/specs"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.15.3"
  },
  "devDependencies": {
    "mocha": "^3.4.2",
-->>   "webpack": "^3.0.0"
  }
}

---
--> npm install --save-dev mocha ( to install mocha )
--> npm test ( to run tests) 
 