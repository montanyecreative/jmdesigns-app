import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from '../../models/projects/project';
import { PROJECTS } from './projects';

@Injectable({ providedIn: 'root' })
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(id: number): Observable<Project> {
    return of(PROJECTS.find(project => project.id === id));
  }
}
