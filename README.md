# TableDragonJS

A NestJS-powered REST API NodeJS backend app featuring some table tennis features to showcase development practice.

## Requirements
NodeJS v21, Npm, NestJS, Docker

## Running the app

### Upping the docker images
`docker-compose up`
Now that the images are running the app is available at 
`http://localhost:8080`

### In your host machine
Please note you will need the provided postgres docker image running.  
```bash
$ npm install
```
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
