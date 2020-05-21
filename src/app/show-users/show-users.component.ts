import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
 
  message;
  error;
  userList;
  constructor(private bookService: BookService, private router: Router) { 
    this.getUserDetails();
  }

  ngOnInit(): void {
  }

  getUserDetails() {
    this.bookService.getStudentData().subscribe(response => {
      console.log(response);
      this.userList = response.userList;  
    }, error => {
          console.log(error);
    });
  }
}
