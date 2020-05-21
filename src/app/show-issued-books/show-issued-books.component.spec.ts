import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIssuedBooksComponent } from './show-issued-books.component';

describe('ShowIssuedBooksComponent', () => {
  let component: ShowIssuedBooksComponent;
  let fixture: ComponentFixture<ShowIssuedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIssuedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIssuedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
