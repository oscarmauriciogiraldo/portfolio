import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  showDescription = false;

  toggleButton(){
    this.showDescription = !this.showDescription;
  }

}
