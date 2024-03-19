import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {AnnounceDTO} from '../../../core/interfaces/announce.interfaces';

@Injectable({ providedIn: 'root' })
export class AnnounceService {

  private resourceUrl = environment.baseUrl + '/api/v1/announces';
  constructor(private http: HttpClient) { }

  findById(id: string) {
    return this.http.get(`${this.resourceUrl}/${id}`);
  }

  createAnnounce(formData: FormData): Observable<AnnounceDTO> {
    return this.http.post<AnnounceDTO>(this.resourceUrl, formData);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.resourceUrl}/${id}`);
  }
}
