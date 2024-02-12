import { Injectable } from "@angular/core";
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ConfigService } from "../services/config.service";
import { DataDefault } from "src/app/pages/dashboards/default/dashboard.model";

@Injectable({
    providedIn: 'root',
})
export class DefaultComponentResolver implements Resolve<DataDefault> {
    constructor( private configService: ConfigService){};
   resolve(route : ActivatedRouteSnapshot ,state :RouterStateSnapshot): Observable<DataDefault>{
    return this.configService.getConfig();
   }
}