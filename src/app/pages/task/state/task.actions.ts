import {createAction, props} from "@ngrx/store";
import {ITask} from "../task.model";


export const toggleIsLoading =
  createAction('[Task] Is Loading');

export const saveTask = createAction('[Task] Save Task', props<{ task: ITask }>());
export const saveTaskSuccess = createAction('[Task] Save Task Success', props<{ task: ITask }>());
export const saveTaskError = createAction('[Task] Save Task Error', props<{ error: string }>());


export const getCurrentTask =
  createAction('[Task] Get Current Task');


export const setCurrentTask =
  createAction('[Task] Set Current Task', props<{ currentTaskId: number }>());

export const claireCurrentTask =
  createAction('[Task] Claire Current Task');

export const loadTasks =
  createAction('[Task] Load');

export const loadTasksSuccess =
  createAction('[Task] Load Success', props<{ tasks: ITask[] }>());

export const loadTasksError =
  createAction('[Task] Load Fail', props<{ message: string }>());
