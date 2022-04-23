import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioCoreMainRoutingModule } from './main-routing.module';
import { PortfolioCoreMainComponent } from './containers/main/main.component';
import { PortfolioHomeFirstSectionComponent } from './components/first-section/first-section.component';
import { PortfolioCoreSecondSectionComponent } from './components/second-section/second-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioCoreDetailComponent } from './containers/detail/detail.component';

@NgModule({
  declarations: [
    PortfolioCoreMainComponent,
    PortfolioHomeFirstSectionComponent,
    PortfolioCoreSecondSectionComponent,
    PortfolioCoreDetailComponent,
  ],
  imports: [CommonModule, PortfolioCoreMainRoutingModule, SharedModule],
  exports: [],
})
export class PortfolioMainModule {}
