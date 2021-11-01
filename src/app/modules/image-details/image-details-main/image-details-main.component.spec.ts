import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailsMainComponent } from './image-details-main.component';

describe('ImageDetailsMainComponent', () => {
  let component: ImageDetailsMainComponent;
  let fixture: ComponentFixture<ImageDetailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageDetailsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
