import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FeatureService {
    private resourceUrl = environment.baseUrl + '/api/v1/features';
    constructor(private http: HttpClient) { }

    getAllFeatures(): Observable<any> {
        return this.http.get(`${this.resourceUrl}`);
    }

    getFeatureById(id: number): Observable<any> {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }

    createFeature(feature: string): Observable<any> {
        return this.http.post(`${this.resourceUrl}?feature=${feature}`, {});
    }

    updateFeature(id: number, feature: any): Observable<any> {
        return this.http.put(`${this.resourceUrl}/${id}`, feature);
    }

    deleteFeature(id: number): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
}
