import { RouterModule, Routes } from '@angular/router';
import { HomeCoreMainComponent } from './containers/main/main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeCoreMainComponent
  },
];
export const HomeCoreMainRoutingModule = RouterModule.forChild(routes);
