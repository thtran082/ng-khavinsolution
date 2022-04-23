import { RouterModule, Routes } from '@angular/router';
import { ContactUsCoreMainComponent } from './containers/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ContactUsCoreMainComponent },
];

export const ContactUsCoreMainRoutingModule = RouterModule.forChild(routes);
