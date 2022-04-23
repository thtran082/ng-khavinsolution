import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeCoreMainRoutingModule } from './main-routing.module';
import { HomeCoreMainComponent } from './containers/main/main.component';
import { HomeCoreFirstSectionComponent } from './components/first-section/first-section.component';
import { HomeCoreSecondSectionComponent } from './components/second-section/second-section.component';
import { HomeCoreThirdSectionComponent } from './components/third-section/third-section.component';
import { HomeCoreFourthSectionComponent } from './components/fourth-section/fourth-section.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, HomeCoreMainRoutingModule, SharedModule],
  exports: [],
  declarations: [
    HomeCoreMainComponent,
    HomeCoreFirstSectionComponent,
    HomeCoreSecondSectionComponent,
    HomeCoreThirdSectionComponent,
    HomeCoreFourthSectionComponent,
  ],
})
export class HomeCoreMainModule {}
