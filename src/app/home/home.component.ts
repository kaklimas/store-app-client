import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
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

  sectionTitle: string = 'Home';

  label: string = 'hey';
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((nav) => {
      if (nav instanceof NavigationStart) {
        console.log(nav);
        let currentLocation = nav.url.split('/').pop();
        this.sectionTitle =
          currentLocation == undefined
            ? 'Home'
            : currentLocation[0].toUpperCase() + currentLocation.slice(1);
      }
    });
    this.username = this.authService.getUsername();
  }
  logout() {
    this.authService.setUsername('');
    this.router.navigate(['login']);
  }
  switchHome() {
    this.router.navigate(['home']);
  }
  switch(val: string) {
    this.router.navigate([val], { relativeTo: this.route });
  }
}
