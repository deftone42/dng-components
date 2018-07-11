import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'dng-tag',
  template: `
    <span *ngIf="tag; else customTag">{{ tag }}</span>
    <ng-template #customTag>
      <span>
        <ng-content></ng-content>
      </span>
    </ng-template>
  `,
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DngTagComponent {
  @HostBinding('attr.class') class = 'dng-tag';
  @Input() public tag?: string;
}
