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

## Releasing

* Run `yarn build:lib` to compile latest version
* Run `yarn release` to update package version
* Go to `projects/dng-components-lib/src/package.json` and update the version there too
* Finally run `npm publish` (you need to be logged in NPM and have permissions)