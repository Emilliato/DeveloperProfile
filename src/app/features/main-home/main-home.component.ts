import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  fullText = "5 years of turning complex challenges into seamless, cutting-edge solutions—one secure line of code at a time.";
  typedText = "";
  showButtons = false;
  typingSpeed = 100;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.startTyping();
    }, 4500);
  }

  startTyping() {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < this.fullText.length) {
        this.typedText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        this.showButtons = true;
      }
    }, this.typingSpeed);
  }

  viewResume() {
    this.router.navigate(['/resume']);
  }

  downloadResume() {
  }
}
