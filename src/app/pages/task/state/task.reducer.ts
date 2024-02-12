import { createReducer, on} from "@ngrx/store";
import {ITask} from "../task.model";
import * as AppState from '../../../state/app.state';
import * as TaskActions from './task.actions';


export interface State extends AppState.State {
  tasks: TaskState;
}

export interface TaskState {
  isLoading: boolean;
  tasks: ITask[];
  currentTaskId: number | null;
  taskSavedSuccess: boolean;
  error: string;
}

const initialState: TaskState =   {
  isLoading: true,
  currentTaskId: null,
  taskSavedSuccess: false,
  tasks: [],
  error: ''
};

export const taskReducer = createReducer<TaskState>(
  initialState,

  on(TaskActions.toggleIsLoading, (state): TaskState => {
    return {
      ...state,
      isLoading: !state.isLoading
    };
  }),

  on(TaskActions.saveTaskSuccess, (state, action): TaskState => {
    return {
      ...state,
      tasks: [...state.tasks, action.task],
      taskSavedSuccess: true,
      error: ''
    }
  }),

  on(TaskActions.saveTaskError, (state, action): TaskState => {
    return {
      ...state,
      error: action.error,
      taskSavedSuccess: false,
    }
  }),

  on(TaskActions.claireCurrentTask, (state): TaskState => {
    return {
      ...state,
      currentTaskId: null,
      taskSavedSuccess: false,
    }
  }),

  on(TaskActions.loadTasksSuccess, (state, action): TaskState => {
    return {
      ...state,
      tasks: action.tasks,
      error: ''
    }
  }),
);
