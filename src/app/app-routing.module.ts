import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ShowIssuedBooksComponent } from './show-issued-books/show-issued-books.component';
import { ShowBorrowedBooksComponent } from './show-borrowed-books/show-borrowed-books.component';
import { IssueBookComponent } from './issue-book/issue-book.component';


const routes: Routes = [ 
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{
  path:'student', component:StudentComponent,
  data:{roles: ['student']}, canActivate: [AuthGuard]
},
{
  path:'admin', component:AdminComponent,
  data:{roles: ['admin']}, canActivate: [AuthGuard]
},
{ 
  path:'books', component:BooksComponent, 
  data:{roles: ['admin']}, canActivate: [AuthGuard]
},
{
  path:'add-book', component:AddBookComponent, 
  data:{roles: ['admin']}, canActivate: [AuthGuard]
},
{
  path:'update-book', component:UpdateBookComponent,
  data:{roles: ['admin']}, canActivate: [AuthGuard]
},
{
  path:'issue-book', component:IssueBookComponent,
  data:{roles: ['admin']}, canActivate: [AuthGuard]
},
{
  path:'request-book', component:RequestBookComponent,
  data:{roles: ['student']}, canActivate: [AuthGuard]
},
{
  path:'return-book', component:ReturnBookComponent,
  data:{roles: ['student']}, canActivate: [AuthGuard]
},
{
  path:'show-requests', component:ShowRequestsComponent,
  data:{roles: ['admin']}, canActivate: [AuthGuard]
},
{
  path:'show-users', component:ShowUsersComponent,
  data:{roles: ['admin']}, canActivate: [AuthGuard]
},
{
  path:'show-issued-books', component:ShowIssuedBooksComponent,
  data:{roles: ['admin']}, canActivate: [AuthGuard]
},
{
  path:'show-borrowed-books', component:ShowBorrowedBooksComponent,
  data:{roles: ['student']}, canActivate: [AuthGuard]
},
{ path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
