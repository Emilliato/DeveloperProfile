import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) {}

  viewResume() {
    this.router.navigate(['/resume']);  // Replace '/resume' with your actual route
  }

  downloadResume() {
    // Your existing download logic here
  }
}
