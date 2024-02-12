import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { DefaultComponentResolver } from 'src/app/core/helpers/DefaultComponent-resolver-service';

const routes: Routes = [
    {
        path: 'default',
        component: DefaultComponent,
        resolve: {
            DefaultData: DefaultComponentResolver 
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
