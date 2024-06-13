import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageNativeComponent } from './image-native.component';

describe('ImageNativeComponent', () => {
  let component: ImageNativeComponent;
  let fixture: ComponentFixture<ImageNativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageNativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
