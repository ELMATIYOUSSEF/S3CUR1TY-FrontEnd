import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TaskService} from "../service/task.service";
import {catchError, map, mergeMap, withLatestFrom} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {EMPTY} from "rxjs";
import * as TaskActions from "./task.actions";
import * as TaskSelectors from "./task.selectors";

@Injectable()
export class TaskEffects {

  constructor(private actions$: Actions,
              private taskService: TaskService,
              private store: Store) {
  }

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      withLatestFrom(this.store.pipe(select(TaskSelectors.getTasks))),
      mergeMap(([, tasks]) => {
        if (tasks.length > 0) {
          return EMPTY;
        } else {
          return this.taskService.getAllTasks().pipe(
            map(tasks => TaskActions.loadTasksSuccess({tasks})),
            catchError(async (err) => TaskActions.loadTasksError(err))
          )
        }
      })
    )
  });

  saveTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.saveTask),
      mergeMap((action) => {
        return this.taskService.save(action.task).pipe(
          map(task => TaskActions.saveTaskSuccess({task})),
          catchError(async (err) => TaskActions.saveTaskError({error: err}))
        )
      })
    )
  });
}
