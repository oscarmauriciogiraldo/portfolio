import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  showDescription = false;

  ngOnInit(): void {
    Aos.init();
  }

  toggleButton(){
    this.showDescription = !this.showDescription;
  }

}
