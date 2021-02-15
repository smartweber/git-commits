import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private REST_API_SERVER = 'https://api.github.com';

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(uri: string){
    return this.httpClient.get(`${this.REST_API_SERVER}/${uri}`);
  }
}
