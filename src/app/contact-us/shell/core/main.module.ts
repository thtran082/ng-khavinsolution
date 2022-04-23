import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactUsCoreMainComponent } from './containers/main/main.component';
import { ContactUsCoreMainRoutingModule } from './main-routing.module';
import { ContactUsCoreFirstSectionComponent } from './components/first-section/first-section.component';
import { ContactUsCoreSecondSectionComponent } from './components/second-section/second-section.component';
import { ContactUsCoreThirdSectionComponent } from './components/third-section/third-section.component';
import { ContactUsCoreFourthSectionComponent } from './components/fourth-section/fourth-section.component';

@NgModule({
  imports: [CommonModule, ContactUsCoreMainRoutingModule],
  exports: [],
  declarations: [
    ContactUsCoreMainComponent,
    ContactUsCoreFirstSectionComponent,
    ContactUsCoreSecondSectionComponent,
    ContactUsCoreThirdSectionComponent,
    ContactUsCoreFourthSectionComponent,
  ],
})
export class ContactUsMainModule {}
