import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'intersection-observer';

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

  coreSkills = {
    CSharp: 0,
    Xamarin: 0,
    Kotlin: 0,
    Java: 0
  };

  supplementarySkills = {
    jQuery: 0,
    TypeScript: 0,
    CSS: 0,
    LaTeX: 0
  };

  devopsSkills = {
    Docker: 0,
    Azure: 0,
    Git: 0,
    Networking: 0,
    Leadership: 0
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.startTyping();
    }, 4500);

    setTimeout(() => {
      // Core Tools
      this.coreSkills.CSharp = 90;
      this.coreSkills.Xamarin = 85;
      this.coreSkills.Kotlin = 80;
      this.coreSkills.Java = 75;

      // Scripting & Markup
      this.supplementarySkills.jQuery = 90;
      this.supplementarySkills.TypeScript = 85;
      this.supplementarySkills.CSS = 80;
      this.supplementarySkills.LaTeX = 70;

      // DevOps & Others
      this.devopsSkills.Docker = 85;
      this.devopsSkills.Azure = 80;
      this.devopsSkills.Git = 85;
      this.devopsSkills.Networking = 75;
      this.devopsSkills.Leadership = 80;
    }, 5000); 
    this.initIntersectionObserver();
  }
  
  initIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          entry.target.classList.remove('out-of-view');
        } else {
          entry.target.classList.add('out-of-view');
          entry.target.classList.remove('in-view');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.animated-element');
    elements.forEach(el => observer.observe(el));
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
