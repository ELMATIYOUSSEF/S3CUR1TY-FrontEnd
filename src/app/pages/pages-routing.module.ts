import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AnnounceListComponent } from './Announce/announce-list/announce-list.component';
import {AnnounceDetailsComponent} from './Announce/announce-details/announce-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/account/auth/login', pathMatch: 'full' },
  { path: 'dashboard', component: DefaultComponent , canActivate: [AuthGuard] },
  // tslint:disable-next-line:max-line-length
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) , canActivate: [AuthGuard]},
  { path: 'Announce', component: AnnounceListComponent , canActivate: [AuthGuard]} ,
  { path: 'Announce/details', component: AnnounceDetailsComponent , canActivate: [AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
