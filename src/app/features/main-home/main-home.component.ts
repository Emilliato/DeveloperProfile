import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router) {}

  viewResume() {
    this.router.navigate(['/resume']);
  }

  downloadResume() {
  }
}
