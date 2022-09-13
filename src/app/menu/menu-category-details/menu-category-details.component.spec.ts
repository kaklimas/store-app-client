import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryDetailsComponent } from './menu-category-details.component';

describe('MenuCategoryDetailsComponent', () => {
  let component: MenuCategoryDetailsComponent;
  let fixture: ComponentFixture<MenuCategoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
