import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSyntaxComponent } from './new-syntax.component';

describe('NewSyntaxComponent', () => {
  let component: NewSyntaxComponent;
  let fixture: ComponentFixture<NewSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSyntaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
