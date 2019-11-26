import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Skill } from './skill';
import { SKILLS } from '../../models/skills/skills';

@Injectable({ providedIn: 'root' })
export class SkillService {

  constructor() { }

  getSkills(): Observable<Skill[]> {
    return of(SKILLS);
  }

  getSkill(id: number): Observable<Skill> {
    return of(SKILLS.find(skill => skill.id === id));
  }
}
