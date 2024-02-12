import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { DataDefault } from 'src/app/pages/dashboards/default/dashboard.model';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  URL = 'assets/dashboard.json';

  constructor(private http: HttpClient) { }
  getConfig() : Observable<DataDefault> {
    return this.http.get<any>(`${this.URL}`)
  }
}
