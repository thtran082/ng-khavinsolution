import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
];

export const CoreRoutingModule = RouterModule.forChild(routes);
