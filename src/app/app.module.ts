import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

import { HelperService } from './helper.service';
import { SignupComponent } from './signup/signup.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    SignupComponent,
    MoviesComponent,
    MovieInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
