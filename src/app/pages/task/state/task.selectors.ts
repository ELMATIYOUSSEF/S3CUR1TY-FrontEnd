import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ITask} from "../task.model";
import {TaskState} from "./task.reducer";

const getTaskFeatureState = createFeatureSelector<TaskState>('tasks');


export const getIsLoadingTask = createSelector(getTaskFeatureState,
    state => state.isLoading);

export const getTaskSavedSuccess = createSelector(getTaskFeatureState,
    state => state.taskSavedSuccess);

export const getError = createSelector(getTaskFeatureState,
    state => state.error);

export const getTasks = createSelector(getTaskFeatureState,
    state => state.tasks);

export const getCurrentTask = createSelector(
  getTaskFeatureState,
  (state, currentTaskId): ITask => {
    if(currentTaskId == 0)
      return {
        id: 0,
        title: '',
        description: '',
        deadline: null,
        startDate: null,
        assignedDate: null,
        completed: false,
        hasChanged: false,
        tags:  [],
      }
    return currentTaskId ? state.tasks.filter(task => task.id === currentTaskId) : null;
  }
);
