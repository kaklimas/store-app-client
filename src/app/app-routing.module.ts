import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './home/movies/movies.component';
import { UsersComponent } from './home/users/users.component';
import { MenuCategoryDetailsComponent } from './menu/menu-category-details/menu-category-details.component';
import { MenuItemDetailsComponent } from './menu/menu-item-details/menu-item-details.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeViewComponent, pathMatch: 'full' },
      { path: 'menu', component: MenuListComponent, pathMatch: 'full' },
      {
        path: 'menu/:category',
        component: MenuCategoryDetailsComponent,
        pathMatch: 'full',
      },
      {
        path: 'menu/details/:id',
        component: MenuItemDetailsComponent,
        pathMatch: 'full',
      },
      { path: 'cart', component: UsersComponent, pathMatch: 'full' },
      { path: 'users', component: UsersComponent, pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
