import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,canActivate: [LoginGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./page/dashboard/dashboard.module').then((m)=> m.DashboardModule)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
