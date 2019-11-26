import { Component, OnInit } from '@angular/core';

import { Project } from '../../services/projects/project';
import { ProjectService } from '../../services/projects/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);
  }
}

