import { TestBed, ComponentFixture } from '@angular/core/testing';

import { DngTagComponent } from './tag.component';
import { DngTagsModule } from './tags.module';

describe('DngTagComponent', () => {
  let fixture: ComponentFixture<DngTagComponent>;
  let component: DngTagComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DngTagsModule],
    });

    fixture = TestBed.createComponent(DngTagComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
