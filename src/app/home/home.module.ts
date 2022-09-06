import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LocationUrlService } from '../services/location-url.service';
import { MatMenuModule } from '@angular/material/menu';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [HomeComponent, MoviesComponent, HomeViewComponent, UsersComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    RouterModule,
  ],
  providers: [LocationUrlService],
})
export class HomeModule {}
