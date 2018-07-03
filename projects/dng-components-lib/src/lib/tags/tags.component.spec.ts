import { TestBed, ComponentFixture } from '@angular/core/testing';

import { DngTagsComponent } from './tags.component';
import { DngTagsModule } from './tags.module';

describe('DngTagsComponent', () => {
  let fixture: ComponentFixture<DngTagsComponent>;
  let component: DngTagsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DngTagsModule],
    });

    fixture = TestBed.createComponent(DngTagsComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
