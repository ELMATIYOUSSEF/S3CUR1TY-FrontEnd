import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TagService} from '../service/Tag.service';
import {Feature, Tag} from '../announce-list/announce-list.component';
import {CategoryService} from '../service/Category.service';
import {FeatureService} from '../service/Feature.service';

interface Category {
  id: number;
  name: string;
}
@Component({
  selector: 'app-announce-details',
  templateUrl: './announce-details.component.html',
  styleUrls: ['./announce-details.component.scss']
})
export class AnnounceDetailsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  CategoryForm: FormGroup;
  FeatureForm: FormGroup;
  LocationForm: FormGroup;
  TagForm: FormGroup;
  SubCategoryForm: FormGroup;
  submitted = false;
  submitted2 = false;
  submitted3 = false;
  submitted4 = false;
  submitted5 = false;
  Tags: Tag[] = [];
  categorys: Category[] = [];
  Features: Feature[] = [];
  constructor(private formBuilder: FormBuilder,
              private tagService: TagService,
              private categoryService: CategoryService,
              private featureService: FeatureService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{label: 'Announce-Details'}, {label: 'Details', active: true}];
    this.CategoryForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
    this.SubCategoryForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
    this.FeatureForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
    this.TagForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
    this.LocationForm = this.formBuilder.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
    });
    this.Tagslouding();
    this.Categorylouding();
    this.Featurelouding();
  }
  get CategoryData() {
    return this.CategoryForm.controls;
  }
  get SubCategoryData() {
    return this.SubCategoryForm.controls;
  }
  get FeatureData() {
    return this.FeatureForm.controls;
  }
  get LocationData() {
    return this.LocationForm.controls;
  }
  get TagData() {
    return this.TagForm.controls;
  }
  onSubmit() {
    console.log(this.CategoryData.name.value);
    this.categoryService.createCategory(this.CategoryData.name.value).subscribe({
      next: (res) => {
        this.categorys.push(res.data);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  deleteCategory(categoryId: number): void {
   /* this.categoryService.deleteCategory(categoryId).subscribe(
        () => {
          // Category deleted successfully, refresh the list
          this.loadCategories();
        },
        (error: any) => {
          console.error('Error deleting category:', error);
        }
    );*/
  }
  deleteFuature(Id: number): void {
    this.featureService.deleteFeature(Id).subscribe(
        () => {
          // Category deleted successfully, refresh the list
          this.Featurelouding();
        },
        (error: any) => {
          console.error('Error deleting Feature:', error);
        }
    );
  }

  onSubmitSubCat() {
    console.log(this.SubCategoryData.name.value);
  }

  onSubmitFeature() {
    console.log(this.FeatureData.name.value);
    this.featureService.createFeature(this.FeatureData.name.value).subscribe({
      next: (res) => {
        this.Features.push(res.data);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  onSubmitLocation() {
    console.log(this.LocationData.address.value);
  }

  onSubmitTag() {
    console.log(this.TagData.name.value);
    this.tagService.createTag(this.TagData.name.value).subscribe({
      next: (res) => {
        this.Tags.push(res.data);
      },
      error: err => {
        console.error(err);
      }
    });
  }
  public Tagslouding() {
    this.tagService.getAllTags().subscribe({
      next: (res) => {
        this.Tags = res.data;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  deleteTag(id: number) {
  }

  public Categorylouding() {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        this.categorys = res.data;
      },
      error: err => {
        console.error(err);
      }
    });
  }
  public Featurelouding() {
    this.featureService.getAllFeatures().subscribe({
      next: (res) => {
        this.Features = res.data;
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
