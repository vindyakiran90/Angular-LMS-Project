import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { BookNamePipe } from './book-name.pipe';
import { ShowIssuedBooksComponent } from './show-issued-books/show-issued-books.component';
import { ShowBorrowedBooksComponent } from './show-borrowed-books/show-borrowed-books.component';
import { IssueBookComponent } from './issue-book/issue-book.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    UpdateBookComponent,
    AddBookComponent,
    BooksComponent,
    HomeComponent,
    StudentComponent,
    AdminComponent,
    ShowRequestsComponent,
    ShowUsersComponent,
    RequestBookComponent,
    ReturnBookComponent,
    BookNamePipe,
    ShowIssuedBooksComponent,
    ShowBorrowedBooksComponent,
    IssueBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
