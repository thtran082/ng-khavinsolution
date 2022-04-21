import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'error',
        pathMatch: 'full',
      },
      {
        path: 'error',
        loadChildren: () =>
          import('../error/core/main.module').then(
            (m) => m.ErrorCoreMainModule
          ),
      },
    ],
  },
];

export const CoreRoutingModule = RouterModule.forChild(routes);
