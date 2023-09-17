import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPageCustomer } from './tabs-page-seller.component';

describe('TabsPage', () => {
  let component: TabsPageCustomer;
  let fixture: ComponentFixture<TabsPageCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsPageCustomer],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPageCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
