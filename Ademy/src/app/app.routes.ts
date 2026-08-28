import { Routes } from '@angular/router';
import { Login } from './Components/Login/login';
import { Books } from './Components/Catalogs/Books/books';
import { Users } from './Components/Catalogs/Users/users';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'books', component: Books },
    { path: 'users', component: Users },
    { path: '**', component: Login }
];
