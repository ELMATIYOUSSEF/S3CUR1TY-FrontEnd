import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AnnounceListComponent} from './announce-list/announce-list.component';
import {ArchwizardModule} from 'angular-archwizard';
import {UIModule} from '../../shared/ui/ui.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {DropzoneModule} from 'ngx-dropzone-wrapper';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ArchwizardModule,
    UIModule,
    NgSelectModule,
    DropzoneModule,
  ]
})
export class AnnounceModule { }
