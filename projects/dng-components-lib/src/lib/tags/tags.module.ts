import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DngTagsComponent } from './tags.component';
import { DngTagComponent } from './tag.component';

const EXPORT_IMPORT_DECLARATIONS = [
  DngTagsComponent,
  DngTagComponent,
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
