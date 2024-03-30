import { Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  private sanitizer = inject(DomSanitizer);

  projects: any;

  @ViewChildren('projectIframe') projectIframes!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.projectIframes.forEach(iframe => {
      iframe.nativeElement.onload = () => {
        const innerDoc = iframe.nativeElement.contentDocument || iframe.nativeElement.contentWindow.document;
        iframe.nativeElement.style.height = innerDoc.body.scrollHeight + 'px';
      };
    });
  }
  
  constructor() {
    this.projects = [
      {
        title: 'MyCalc',
        embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://aadijay3477.github.io/mycalc/')
      },
    ];
  }
}
