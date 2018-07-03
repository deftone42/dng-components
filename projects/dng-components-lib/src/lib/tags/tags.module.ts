import { NgModule } from '@angular/core';

import { DngTagsComponent } from './tags.component';
import {CommonModule} from "@angular/common";

const EXPORT_IMPORT_DECLARATIONS = [
  DngTagsComponent
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...EXPORT_IMPORT_DECLARATIONS
  ],
  exports: [
    ...EXPORT_IMPORT_DECLARATIONS,
  ]
})
export class DngTagsModule {
}
