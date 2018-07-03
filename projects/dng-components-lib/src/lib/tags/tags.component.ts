import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'dng-tags',
  host: {
    class: 'dng-tags',
  },
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DngTagsComponent {
  @Input() public tags: string[] = [];
}
