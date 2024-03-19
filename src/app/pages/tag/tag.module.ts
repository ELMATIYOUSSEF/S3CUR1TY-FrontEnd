
import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {TagRoutingModule} from "./tag-routing.module";
import {UIModule} from "../../shared/ui/ui.module";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {ListTagComponent} from "./list-tag/list-tag.component";


@NgModule({
  declarations: [
    ListTagComponent
  ],
  imports: [
    SharedModule,
    TagRoutingModule,
    StoreModule.forFeature('', {}),
    UIModule,
    NgbPaginationModule,
  ],
  exports: [
  ]
})
export class TagModule { }
