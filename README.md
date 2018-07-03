# Dng Components

This is an open source library with customizable components, we'll keep adding components. This library doesn't plan to be anything like [material/cdk](https://material.angular.io/cdk/categories) or [PrimeNG](https://www.primefaces.org/primeng/) they have excellent components. 

## How to start
1. Clone the repo, install dependencies (using `yarn install` command).
2. Run `yarn start` to start the server (in watch mode)
3. Open [localhost:4200](http://localhost:4200) and develop

## Yarn commands

#### Development
* `yarn start` to compile app and serve it on [localhost:4500](http://localhost:4500)
* `yarn start:debug` to compile the app in debug mode.

#### Building
* `yarn build` to build/compile all packages (fast, without AoT)
* `yarn build:lib` to build/compile the library

# Dng Components Lib

Set of Angular components ready to use

## Installation

run `npm install dng-components` or `yarn add dng-components`

## How to use

Simply add `DngComponentsLibModule` to your module

```
import { DngComponentsLibModule } from 'dng-components';

@NgModule({
  imports: [
    DngComponentsLibModule,
  ],
})
export class MyModule { }
```

# Contribute
Open to contributions :)

[Issue tracker](https://github.com/deftone42/dng-components/issues)
You can grab the source code at the package's Git repository.

# Support
Email: deftone42@gmail.com

# Authors
deftone42 ([twitter](https://twitter.com/Deftone21))