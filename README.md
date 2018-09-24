### Required

* Verify that you are running at least Node.js version 8.x or greater and npm version 5.x or greater by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine.

* Run npm install

## Run the app with 

ng serve --disable-host-check (env_var.ts will make requests to 'http://localhost:8081/')


## Run app on PRD with (This process mocks minify and dist export, it is not suitable for real PRD env)

ng serve --prod --disable-host-check (env_var.ts will make requests to 'https://vshop-backend-jdaza13.c9users.io/')

## Run lint with

ng lint

### Live preview

[Here!](https://vshop-frontend-jdaza13.c9users.io/)

## TODO

* General styles of the app are quite basic
* shopcart is the same for the app, should be independent for user (the app has no users)
* Because of angular material, min-res is 470px, smaller screens may have problems with form fields