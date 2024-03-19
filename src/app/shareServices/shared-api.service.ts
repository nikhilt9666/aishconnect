import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedAPIService {
  baseUrl: any = '';
  constructor(private httpClient: HttpClient) {

   }

   getAllData(url:any){
    const getDataurl = this.baseUrl+url;
      return this.httpClient.get(getDataurl);
   }
   getSpecificData(url:any, payload:any){
     return this.httpClient.post(url,payload);
   }

  
}
