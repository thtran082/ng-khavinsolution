import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'not-found' },
  // { path: 'not-found', component: ErrorComponent },
  {
    path: '',
    loadChildren: () => import('./shell/core.module').then((m) => m.CoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
