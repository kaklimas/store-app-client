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
import { AuthService } from '../shared/auth.service';
import { MoviesSummaryComponent } from './movies/movies-summary/movies-summary.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { StringToCamelCasePipe } from '../data/string-to-camel-case.pipe';
@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    HomeViewComponent,
    UsersComponent,
    MoviesSummaryComponent,
    MoviesListComponent,
    StringToCamelCasePipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [LocationUrlService, AuthService],
})
export class HomeModule {}
