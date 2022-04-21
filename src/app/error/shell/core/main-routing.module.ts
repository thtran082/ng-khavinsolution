import { RouterModule, Routes } from '@angular/router';
import { ErrorCoreMainComponent } from './containers/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ErrorCoreMainComponent },
];

export const ErrorCoreMainRoutingModule = RouterModule.forChild(routes);
