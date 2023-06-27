import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMS';
  constructor(private route: ActivatedRoute) {}

  isLoginOrRegisterScreenOpen(): boolean {
    const currentPath = this.route.snapshot.firstChild?.routeConfig?.path;
    return currentPath === 'login' || currentPath === 'register';
  }
}
