# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

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


## Install Project

  - npm install / npm i


# Deploy
## Install Github Pages

  ### install ghpages

  - ng add angular-cli-ghpages
  ### deploy - project

  ng deploy --base-href=https://oscarmauriciogiraldo.github.io/portfolio/

## Install Fontawesome

  - npm install --save @fortawesome/fontawesome-free

  ### Configure Fontawesome Styles

  Angular.Json

  - "styles": [
    "src/styles.scss",
    "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
  ],

  - "scripts": [
    "node_modules/@fortawesome/fontawesome-free/js/all.min.js"
  ]

## Install AOS Library Animations Scroll

  #### Oficial Page

    - https://michalsnik.github.io/aos/

  #### Documentation

    - https://github.com/michalsnik/aos

    - npm install --save aos@next

  #### Types Aos

    - npm i -save-dev @types/aos

  ### Implements Aos Library 

  ##### Angular.json

    - "styles": [
        "./node_modules/aos/dist/aos.css"
      ],

  #### Imports in component 

    - import * as Aos from 'aos';

    ngOnInit(): void {
      Aos.init();
    }

  ##### Set animation using data-aos attribute:

  - <div data-aos="fade-in"></div>

  -  <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
      </div>
