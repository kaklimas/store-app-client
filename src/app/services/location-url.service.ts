export class LocationUrlService {
  currentUrl: any = '';

  getCurrentHeader(): any {
    this.getCurrentUrl();

    return this.currentUrl.charAt(0).toUpperCase() + this.currentUrl.slice(1);
  }

  private getCurrentUrl() {
    this.currentUrl = window.location.href.split('/').pop();
  }
}
