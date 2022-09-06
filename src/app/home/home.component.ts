import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationUrlService } from '../services/location-url.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  username: string = '';
  displayToggleButton: boolean = false;
  opened: boolean = true;

  sectionTitle: string = '';

  label: string = 'hey';
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationUrlService
  ) {
    this.sectionTitle = locationService.getCurrentHeader();
    this.username = this.authService.getUsername();
  }
  logout() {
    this.authService.setUsername('');
    this.router.navigate(['login']);
  }
}
