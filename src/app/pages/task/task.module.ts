import {NgModule} from "@angular/core";
import {ListTaskComponent} from "./list-task/list-task.component";
import {SharedModule} from "../../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {TaskRoutingModule} from "./task-routing.module";
import {UIModule} from "../../shared/ui/ui.module";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {taskReducer} from "./state/task.reducer";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {TaskEffects} from "./state/task.effects";
import {CommonModule} from "@angular/common";
import { AddTaskComponent } from './add-task/add-task.component';


@NgModule({
  declarations: [
    ListTaskComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule,
    StoreModule.forFeature('tasks', taskReducer),
    EffectsModule.forFeature([TaskEffects]),
    UIModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  ]
})
export class TaskModule { }
