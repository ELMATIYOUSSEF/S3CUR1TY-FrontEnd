import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TagService {
    private resourceUrl = environment.baseUrl + '/api/v1/tags';
    constructor(private http: HttpClient) { }

    getAllTags(): Observable<any> {
        return this.http.get(`${this.resourceUrl}`);
    }

    createTag(tag: string): Observable<any> {
        return this.http.post(`${this.resourceUrl}?tag=${tag}`, {});
    }

}
