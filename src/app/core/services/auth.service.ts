import { Injectable } from '@angular/core';

import { authUtils } from '../../authUtils';

import { User } from '../models/auth.models';
import {Observable} from "rxjs";
import {JwtAuthenticationResponse} from "../../account/auth/jwt-authentication-response.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

  private apiUrl: string = environment.baseUrl + "/api/v1/auth/";

  user: User;

  constructor(private http: HttpClient) {
  }

  /**
   * Registers the user with given details
   */
  register(firstName: string,lastName: string,email: string, password: string): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(this.apiUrl + "register", {firstName ,lastName ,email, password});
  }

  /**
   * Login user with given details
   */
  login(email: string, password: string): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(this.apiUrl + "login", {email, password})
      .pipe(
        map((response: JwtAuthenticationResponse) => {
          // login successful if there's a jwt token in the response
          if (response && response.accessToken && response.refreshToken) {
            // retrieve the user info
            this.auth(response.accessToken).subscribe({
              next: (user: User) => {
                authUtils.setLoggedCredentials(user, response);
              }
            });

          }
          return response;
        }
      ));
  }

  auth(access_token: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + "auth", {headers: {Authorization: `Bearer ${access_token}`}})
      .pipe(
        map((response: User) => {
          if (response) {
            authUtils.setLoggedCredentials(response, null);
          }
          return response;
        })
      );
  }

  /**
   * forget Password user with given details
   */
  resetPassword(email: string) {
    return this.http.post(this.apiUrl + "forget-password", {email});
  }

/**
   * Logout the user
   */
  logout() {
      // logout the user
      authUtils.logout();
  }
    
    getRefreshToken(){
    return authUtils.getRefrechToken();
    }

    refreshToken(refresh_token: string): Observable<JwtAuthenticationResponse> {
      return this.http.post<JwtAuthenticationResponse>(this.apiUrl + "token/refresh", {}, {headers: {Authorization: `Bearer ${refresh_token}`}})
        .pipe(
          map((response: JwtAuthenticationResponse) => {
            if (response) {
              authUtils.setAccessToken(response.accessToken);
            }
            return response;
          })
        );
    }
  
}

