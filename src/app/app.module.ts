import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { HomeModule } from './home/home.module';
import { AuthService } from './shared/auth.service';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuItemDetailsComponent } from './menu/menu-item-details/menu-item-details.component';
import { MenuCategoryDetailsComponent } from './menu/menu-category-details/menu-category-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { StringUpperFirstLetterPipe } from './data/string-upper-first-letter.pipe';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuListComponent,
    MenuItemDetailsComponent,
    MenuCategoryDetailsComponent,
    StringUpperFirstLetterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    HomeModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
