# AngularCarVoteWorkshop

-How was this built?

```
npm install -g @angular/cli
ng new first-app --no-standalone

ng generate service cars

ng generate module cars
ng generate component cars/add
ng generate component cars/view
ng generate component cars/list
ng generate component cars/edit

ng generate module layout
ng generate component layout/menu

```

## Branch: jsonserver

On this branch you can start:

```
json-server --watch cars/data/cars.json
```

and the car.service.ts will connect to the api

## Further Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
