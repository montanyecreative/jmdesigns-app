import { Component, OnInit } from '@angular/core';

import { Skill } from '../../services/skills/skill';
import { SkillService } from '../../services/skills/skill.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills()
    .subscribe(skills => this.skills = skills);
  }
}
