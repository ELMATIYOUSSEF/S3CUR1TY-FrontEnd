import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs";
import {Tag} from "../../tag/tag.model";
import * as TaskActions from '../state/task.actions';
import * as TaskSelectors from "../state/task.selectors";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit, OnDestroy {

  taskForm: FormGroup;
  error$: Observable<string>;

  constructor(private fb: FormBuilder, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      deadline: [null, Validators.required],
      startDate: [null, Validators.required],
      assignedDate: [null],
      completed: [false],
      hasChanged: [false],
      tags: this.fb.array([]),
    });

    this.error$ = this.store.select(TaskSelectors.getError);
  }

  get tagsArray(): FormArray {
    return this.taskForm.get('tags') as FormArray;
  }

  addTag(): void {
    this.tagsArray.push(this.fb.control(''));
  }

  removeTag(index: number): void {
    this.tagsArray.removeAt(index);
  }

  onSave(): void {
    if (this.taskForm.invalid)
      return;

    const newTask = this.taskForm.value;
    newTask.tags = newTask.tags.map(tag => new Tag(tag));
    this.store.dispatch(TaskActions.saveTask({ task: newTask }));

    this.store.select(TaskSelectors.getTaskSavedSuccess).subscribe(isSaved => {
      if (isSaved) {
        this.router.navigate(['/task']);
      }
    });
  }

  resetForm(): void {
    this.taskForm.reset({
      title: '',
      description: '',
      deadline: null,
      startDate: null,
      assignedDate: null,
      completed: false,
      hasChanged: false,
      tags: [],
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(TaskActions.claireCurrentTask());
  }

}
