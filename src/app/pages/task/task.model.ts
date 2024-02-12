import {Tag} from "../tag/tag.model";

export interface ITask {

  id: number;

  title: string;

  description: string;

  deadline: Date;

  startDate: Date;

  assignedDate: Date;

  completed: boolean;

  hasChanged: boolean;

  tags: Tag[];
}

export class Task implements ITask {

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public deadline: Date,
    public startDate: Date,
    public assignedDate: Date,
    public completed: boolean,
    public hasChanged: boolean,
    public tags: Tag[]) {
  }
}
