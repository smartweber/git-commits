import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../commons/global-constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL: string;

  constructor(private httpClient: HttpClient) {
    this.apiURL = GlobalConstants.apiURL;
  }

  public sendGetRequest(uri: string){
    return this.httpClient.get(`${this.apiURL}/${uri}`);
  }
}
