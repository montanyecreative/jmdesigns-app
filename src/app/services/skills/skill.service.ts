import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Skill } from '../../models/skills/skill';
import { SKILLS } from './skills';

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
