import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('contactSection') contactSectionRef!: ElementRef<HTMLElement>;

  technologies = [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'NgRx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg' },
  ];

  contactInfo = [
    { label: 'Email', value: 'your.email@example.com' },
    { label: 'Phone', value: '+1234567890' },
  ];

  tabsContent = [
    {
      label: 'Projects and Trainings',
      content: `Movie recommendation project using ML: Created a movie recommendation engine using libraries Numpy,
                Pandas, Matplotlib, and Sklearn.
                Candlestick Screener For Stock Using Python: Developed a web-based technical screener for candlestick
                patterns to predict market movement.
                Skills: Python, Flask, TA-Lib`
    },
    {
      label: 'Work Experience',
      content: `Current Job Role - DSE@Infosys
                Recent Project - CN-SCIO
                Trained on MEAN Stack
                More than 1.5 years of experience as a UI Developer in Angular
                Backend Intern - Technical Product Analyst@Juspay`
    },
    {
      label: 'Educational Background',
      content: `Bachelor of Technology in Electronics and Communications
                Jaypee Institute of Information Technology | 2018-22
                Schooling:
                Bishop George School and College
                Class 10th (ICSE) - 2014-2015
                Class 12th (ICSE) - 2016-2017`
    }
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // Apply background image to the contact section
    this.renderer.setStyle(this.contactSectionRef.nativeElement, 'background-image', 'url("/src/assets/images/bg-image.jpg")'); // Replace with your image path
  }

  ngOnDestroy(): void {
    // Clean up when component is destroyed
    this.renderer.removeStyle(this.contactSectionRef.nativeElement, 'background-image');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    // Adjust background position based on mouse movement
    this.renderer.setStyle(this.contactSectionRef.nativeElement, 'background-position', `${x * 50}% ${y * 50}%`);
  }
}
