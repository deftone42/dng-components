import { NgModule } from '@angular/core';

import { DngTagsModule } from './tags';

const EXPORT_IMPORT_MODULES = [
  DngTagsModule,
];

@NgModule({
  imports: [
    ...EXPORT_IMPORT_MODULES,
  ],
  exports: [
    ...EXPORT_IMPORT_MODULES,
  ]
})
export class DngComponentsLibModule {}
