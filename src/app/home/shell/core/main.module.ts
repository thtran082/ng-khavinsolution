import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeCoreMainRoutingModule } from './main-routing.module';
import { HomeCoreMainComponent } from './containers/main/main.component';
import { HomeCoreFirstSectionComponent } from './components/first-section/first-section.component';
import { HomeCoreSecondSectionComponent } from './components/second-section/second-section.component';
import { HomeCoreThirdSectionComponent } from './components/third-section/third-section.component';
import { HomeCoreFourthSectionComponent } from './components/fourth-section/fourth-section.component';
import { HomeCoreFifthSectionComponent } from './components/fifth-section/fifth-section.component';
import { HomeCoreConnectFormComponent } from './components/connect-form/connect-form.component';

@NgModule({
  imports: [CommonModule, HomeCoreMainRoutingModule],
  exports: [],
  declarations: [
    HomeCoreMainComponent,
    HomeCoreFirstSectionComponent,
    HomeCoreSecondSectionComponent,
    HomeCoreThirdSectionComponent,
    HomeCoreFourthSectionComponent,
    HomeCoreFifthSectionComponent,
    HomeCoreConnectFormComponent
  ],
})
export class HomeCoreMainModule {}
