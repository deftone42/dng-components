# Dng Components

## How to start
1. Clone the repo, install dependencies (using `yarn install` command).
2. Run `yarn start` to start the server (in _watch_ mode)
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