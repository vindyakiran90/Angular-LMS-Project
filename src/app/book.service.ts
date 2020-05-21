import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  myURL = "http://localhost:8080/spring_lms";
  
  constructor(private http: HttpClient) { }

  postData(bookBean){
    return this.http.post<any>(`${this.myURL}/addBook`, bookBean);
  }

  getData(){
    return this.http.get<any>(`${this.myURL}/bookList`);
  }

  updateData(bookBean){
    return this.http.put<any>(`${this.myURL}/updateBook`, bookBean);
  }
  
  deleteData(bookId:number){
    return this.http.delete<any>(`${this.myURL}/deleteBook/` + bookId);
  }

  getStudentData() {
    return this.http.get<any>(`${this.myURL}/showStudentUsers`);
  }
  
  getRequest() {
    return this.http.get<any>(`${this.myURL}/showRequest`);
  }
  
  getIssuedBooks(){
    return this.http.get<any>(`${this.myURL}/showIssuedBooks`);
  }

  getBorrowedBooks(borrowBook){
    return this.http.post<any>(`${this.myURL}/userBookborrowedList/`, borrowBook);
  }

  getBookRequest(requestBook){
    return this.http.post<any>(`${this.myURL}/requestBook`, requestBook);
  }

  getIssueBook(requestBook){
    return this.http.post<any>(`${this.myURL}/issueBook`, requestBook);
  }

  getReturnBook(borrowBook){
    return this.http.post<any>(`${this.myURL}/returnBook`, borrowBook);
  }

  getBookById(bookId: number): Observable<any> {
    return this.http.get<any>(`${this.myURL}searchBookById/${bookId}`);
  }

  getBookByTitle(bookTitle: string) {
    return this.http.get<any>(`${this.myURL}searchBookByTitle/` + bookTitle);
  }

  getBookByAuthor(author: string) {
    return this.http.get<any>(`${this.myURL}searchBookByAuthor/` + author);
  }

}
