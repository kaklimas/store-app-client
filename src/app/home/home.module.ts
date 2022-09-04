import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { LocationUrlService } from '../services/location-url.service';

@NgModule({
  declarations: [
    HomeComponent, LayoutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [LocationUrlService]
})
export class HomeModule { }
