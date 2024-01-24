import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KogoutComponent } from './kogout.component';

describe('KogoutComponent', () => {
  let component: KogoutComponent;
  let fixture: ComponentFixture<KogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
