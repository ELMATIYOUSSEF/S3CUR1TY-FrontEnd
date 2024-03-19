import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private resourceUrl = environment.baseUrl + '/api/v1/categorys';
    constructor(private http: HttpClient) { }

    getAllCategories(): Observable<any> {
        return this.http.get(`${this.resourceUrl}`);
    }

    createCategory(category: string): Observable<any> {
        return this.http.post(`${this.resourceUrl}?category=${category}`, {});
    }
}
