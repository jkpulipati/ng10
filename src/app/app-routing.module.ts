import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MoviesComponent } from './movies/movies.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'movies', component:  MoviesComponent},
  { path: 'movie/:id', component:  MovieInfoComponent},
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
