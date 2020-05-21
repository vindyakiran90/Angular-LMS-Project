import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBorrowedBooksComponent } from './show-borrowed-books.component';

describe('ShowBorrowedBooksComponent', () => {
  let component: ShowBorrowedBooksComponent;
  let fixture: ComponentFixture<ShowBorrowedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBorrowedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBorrowedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
