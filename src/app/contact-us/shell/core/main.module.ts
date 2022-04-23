import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactUsCoreMainComponent } from './containers/main/main.component';
import { ContactUsCoreMainRoutingModule } from './main-routing.module';
import { ContactUsCoreFirstSectionComponent } from './components/first-section/first-section.component';
import { ContactUsCoreSecondSectionComponent } from './components/second-section/second-section.component';
import { ContactUsCoreThirdSectionComponent } from './components/third-section/third-section.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, ContactUsCoreMainRoutingModule, SharedModule],
  exports: [],
  declarations: [
    ContactUsCoreMainComponent,
    ContactUsCoreFirstSectionComponent,
    ContactUsCoreSecondSectionComponent,
    ContactUsCoreThirdSectionComponent,
  ],
})
export class ContactUsMainModule {}
