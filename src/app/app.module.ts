import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

import { HelperService } from './helper.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, UsersComponent, SignupComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [HelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
