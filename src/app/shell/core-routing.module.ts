import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/shell/core/main.module').then(
            (m) => m.HomeCoreMainModule
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import('../error/shell/core/main.module').then(
            (m) => m.ErrorCoreMainModule
          ),
      },
    ],
  },
];

export const CoreRoutingModule = RouterModule.forChild(routes);
