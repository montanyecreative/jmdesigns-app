import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { ProjectsComponent } from './shared/projects/projects.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SkillsComponent } from './shared/skills/skills.component';
import { ExperienceComponent } from './shared/experience/experience.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ProjectsComponent,
        HomePageComponent,
        SkillsComponent,
        ExperienceComponent,
        ContactComponent,
        ScrollToTopComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        SectionsModule,
        ComponentsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
