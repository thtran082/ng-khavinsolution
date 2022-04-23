import { RouterModule, Routes } from '@angular/router';
import { PortfolioCoreDetailComponent } from './containers/detail/detail.component';
import { PortfolioCoreMainComponent } from './containers/main/main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PortfolioCoreMainComponent,
  },
  { path: ':id', pathMatch: 'full', component: PortfolioCoreDetailComponent },
];

export const PortfolioCoreMainRoutingModule = RouterModule.forChild(routes);
