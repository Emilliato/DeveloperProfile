import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'intersection-observer';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  fullText = "5 years of innovative problem-solving";
  typedText = "";
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
    }, 3500);

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
    }, 2000); 
    this.initIntersectionObserver();
  }
  
  initIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '-30px 0px -30px 0px',
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

    const projectCards = document.querySelectorAll('.project-card-large');
    projectCards.forEach((card, index) => {
      switch(index){
         case 1:
          card.classList.add('slide-in-top');
          break;
          case 0:
            card.classList.add('slide-in-left');
            break;
          case 3:
              card.classList.add('slide-in-right');
            break;
          case 2:
            card.classList.add('slide-in-bottom');
            break;
            
      }
      observer.observe(card);
    });
  }

  startTyping() {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < this.fullText.length) {
        this.typedText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, this.typingSpeed);
  }

  viewResume() {
    const resumeUrl = this.router.createUrlTree(['/resume']).toString();
    window.open(resumeUrl, '_blank');
  }

  downloadResume() {
    const fileUrl = 'assets/docs/Emillio_Resume.pdf'; 
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = 'Emillio_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  }
}
