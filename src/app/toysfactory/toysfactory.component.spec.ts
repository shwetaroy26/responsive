import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysfactoryComponent } from './toysfactory.component';

describe('ToysfactoryComponent', () => {
  let component: ToysfactoryComponent;
  let fixture: ComponentFixture<ToysfactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysfactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
