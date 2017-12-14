# SimpleAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Example of building the container for use in minikube

Setup docker env
```eval $(minikube-docker-env)```

Do a docker build of the container
```build -t simple-angular:v1 simple-angular-app/.```

Create a kube deployment
```kubectl run test-angular --image=simple-angular:v1 --port=4200```

Check deployment status
```kubectl get pods``

Expose the pod to external requests
```kubectl expose deployment test-angular —type=LoadBalancer```

Check the service is up
```kubectl get services```

Open the service in the browser
```minikube service test-angular```

Updating the deployed image
1. rebuild docker image -> ```build -t simple-angular:v2 simple-angular-app/.```
2. set image for kube node -> ```kubectl set image deployment/test-angular test-angular=simple-angular:v2```
3. Open new version -> ```minikube service test-angular```
