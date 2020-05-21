import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-requests',
  templateUrl: './show-requests.component.html',
  styleUrls: ['./show-requests.component.css']
})
export class ShowRequestsComponent implements OnInit {

  message;
  error;
  requestBook;
  constructor(private bookService:BookService, private router:Router) { 
    this.getRequests();
  }

  ngOnInit(): void {
  }

  getRequests(){
    this.bookService.getRequest().subscribe(response => {
      console.log(response);
      this.requestBook = response.requestBookList;
    }, error => {
      console.log(error);
    });
  }
}
