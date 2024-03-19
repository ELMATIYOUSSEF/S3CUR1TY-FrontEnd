import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../core/services/auth.service';
import {config} from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {HttpClient} from '@angular/common/http';
import {CAnnounce, CInformation, InformationDTO} from '../../../core/interfaces/announce.interfaces';
import {authUtils} from '../../../authUtils';
import {User} from '../../../core/models/auth.models';
import {AnnounceService} from '../service/announce.service';
import {TagService} from '../service/Tag.service';
import {FeatureService} from '../service/Feature.service';
interface Location {
  id: number;
  ville: string;
}
export interface Feature {
    id: number;
    name: string;
    isSelected: boolean;
}
export interface Tag {
    id: number;
    name: string;
    isSelected: boolean;
}
@Component({
  selector: 'app-announce-list',
  templateUrl: './announce-list.component.html',
  styleUrls: ['./announce-list.component.scss']
})
export class AnnounceListComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  description = '';
  isFirstFocus = true;
  files: File[] = [];
  AnnounceForm: FormGroup;
  InfoForm: FormGroup;
  submitted = false;
  submitted2 = false;
  submitted3 = false;
  error = '';
  returnUrl: string;
  public Editor = ClassicEditor;
  // set the currenr year
  year: number = new Date().getFullYear();
  Categorys: any;
  SubCategorys: any;
  selectedLocation?: number;
  selectedCategory?: number;
  selectedSubCategory?: number;
  locations: Location[] = [];
  Features: Feature[] = [];
  Tags: Tag[] = [];
  featuresSelected: Feature[] = [];
  tagsSelected: Tag[] = [];
  user: User;



constructor(private formBuilder: FormBuilder,
            private route: ActivatedRoute,
            private http: HttpClient,
            private router: Router,
            private authenticationService: AuthenticationService,
            private announceService: AnnounceService,
            private tagService: TagService,
            private  featureService: FeatureService) {
  }
  ngOnInit() {
    this.user = authUtils.getAuthenticatedUser();
    this.breadCrumbItems = [{label: 'Announces'}, {label: 'Announce', active: true}];
    document.body.classList.add('auth-body-bg');
    this.http.get<Location[]>('assets/City.json').subscribe(data => {
      this.locations = data;
    });
    this.Featurelouding();
    this.Tagslouding();
    this.AnnounceForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
    this.InfoForm = this.formBuilder.group({
      phone: ['', Validators.required],
      visiblePhone: [true, Validators.required],
      numChambers: ['', Validators.required],
      numSalons: ['', Validators.required],
      numBain: ['', Validators.required],
      numCuisine: ['', Validators.required],
      floor: ['', Validators.required],
      livingSurface: ['', Validators.required],
      totalSurface: ['', Validators.required],
      propertyAge: ['', Validators.required],
      syndicFees: ['', Validators.required],
      cleaningFees: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get AnnounceData() {
    return this.AnnounceForm.controls;
  }
  get InfoData() { return this.InfoForm.controls; }
  /**
   * Form submit
   */
  GetAnnounceInfo() {
    this.submitted = true;
    console.log(this.description);
    return;

    // stop here if form is invalid
    if (this.AnnounceForm.invalid) {
      console.log('invalid login form');
      return;
    } else {
      this.authenticationService.login(this.AnnounceData.Title.value, this.AnnounceData.password.value)
        .subscribe({
          next: () => {
            this.router.navigate(['/dashboard']);
          }
        });
    }
  }

  onBlurDescription(event: any) {
    this.description = event.editor.getData();
  }

  AnnounceFirstData() {
    console.log(this.AnnounceData.Title.value);
    console.log(this.AnnounceData.price.value);
    console.log(this.description);
  }

  onSubmit2() {
    this.submitted2 = true;
  }
  onSelect(event) {
    this.files.push(...event.addedFiles);
    console.log(this.files);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  AnnounceInfoData() {
    console.log(this.InfoData.phone.value);
  }
    onSubmitGeneral() {
        const endpointUrl = 'https://your-backend-api.com/announcements';
        const formData = new FormData();

        // Append files to the form data
        this.files.forEach(file => {
            formData.append('images', file);
        });
        const information = this.InfoForm.value as InformationDTO;
        const announce = this.AnnounceForm.value as CAnnounce;
        announce.information = information;
        announce.description = this.description;
        announce.publisherId = this.user.id;

        // Append selected category and sub-category if available
        if (this.selectedCategory) {
            announce.categoryId = this.selectedCategory;
        }
        if (this.selectedSubCategory) {
            announce.subCategoryId = this.selectedSubCategory;
        }

        // Append location if available
        if (this.selectedLocation) {
            announce.locationId = this.selectedLocation;
        }

        announce.featureIds = this.featuresSelected
            .map(f => f.id);
        announce.tagIds = this.tagsSelected
            .map(f => f.id);
        formData.append('announceInformation', JSON.stringify(announce));

        // Send the form data to the backend using HttpClient
        this.announceService.createAnnounce(formData).subscribe({
            next: (response) => {
                // Handle the successful response here
                console.log('Data sent successfully', response);
                // Navigate to another page if necessary
                this.router.navigate(['/thank-you']);
            },
            error: (error) => {
                // Handle errors here
                console.error('Error sending data', error);
                this.error = 'An error occurred while sending data';
            }
        });
    }
    onCheckedFeatures(feature: Feature) {
        feature.isSelected = !feature.isSelected;
        if (feature.isSelected) {
            this.featuresSelected.push(feature);
        } else {
            this.featuresSelected = this.featuresSelected.filter(f => f.id !== feature.id);
        }
    }

    onCheckedTags(tag: Tag) {
        tag.isSelected = !tag.isSelected;
        if (tag.isSelected) {
            this.featuresSelected.push(tag);
        } else {
            this.tagsSelected = this.tagsSelected.filter(f => f.id !== tag.id);
        }
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
