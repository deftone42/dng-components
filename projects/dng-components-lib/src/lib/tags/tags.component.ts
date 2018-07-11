import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'dng-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DngTagsComponent {
  @HostBinding('attr.class') class = 'dng-tags-container';
  @Input() public tags?: string[];
}
