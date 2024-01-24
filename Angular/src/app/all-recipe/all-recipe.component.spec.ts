import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipeComponent } from './all-recipe.component';

describe('AllRecipeComponent', () => {
  let component: AllRecipeComponent;
  let fixture: ComponentFixture<AllRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
