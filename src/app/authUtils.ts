import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {User} from "./core/models/auth.models";
import {JwtAuthenticationResponse} from "./account/auth/jwt-authentication-response.model";

class AuthUtils {


  constructor() {
  }


  /**
   * Logout the user
   */
  logout() {
    sessionStorage.removeItem('authUser');
    sessionStorage.clear();
  }

  setLoggedCredentials(user: User, jwtAuthenticationResponse: JwtAuthenticationResponse) {
    if (user) {
      sessionStorage.setItem('authUser', JSON.stringify(user));
    }
    if (jwtAuthenticationResponse) {
      this.setAccessToken(jwtAuthenticationResponse.accessToken);
      this.setRefreshToken(jwtAuthenticationResponse.refreshToken);
    }
  }

  setRefreshToken(refreshToken: string) {
    sessionStorage.setItem('refresh_token', refreshToken);
  }

  setAccessToken(accessToken: string) {
    sessionStorage.setItem('access_token', accessToken);
  }

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser(): User | null {
    const authUserString = sessionStorage.getItem('authUser');
    if (!authUserString) {
      return null;
    }
    return JSON.parse(authUserString) as User;
  }
  handleError(error) {
    return error.message;
  }

  currentAccessToken() {
    return sessionStorage.getItem('access_token') ?? null;
  }

  currentUserValue() {
    return this.getAuthenticatedUser();
  }
  getRefrechToken() {
    return sessionStorage.getItem('refresh_token') ?? null;
  }
}

export const authUtils = new AuthUtils();
