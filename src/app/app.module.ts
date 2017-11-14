import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ResumeHeaderComponent } from './resume-header/resume-header.component';
import { SkillsExpertiseComponent } from './skills-expertise/skills-expertise.component';
import { ReferencesComponent } from './references/references.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    EducationComponent,
    ResumeHeaderComponent,
    SkillsExpertiseComponent,
    ReferencesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
