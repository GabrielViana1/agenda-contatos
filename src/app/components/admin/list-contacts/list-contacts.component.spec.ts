import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContactsComponent } from './list-contacts.component';

describe('ListContactsComponent', () => {
  let component: ListContactsComponent;
  let fixture: ComponentFixture<ListContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListContactsComponent]
    });
    fixture = TestBed.createComponent(ListContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
