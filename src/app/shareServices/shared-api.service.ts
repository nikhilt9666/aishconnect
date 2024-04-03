import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedAPIService {
  baseUrl: any = 'http://103.151.107.153:8000';
  constructor(private httpClient: HttpClient) {

   }

   getAllData(){
    let url='/customer-ageing-data';
    const getDataurl = this.baseUrl+url;
      return this.httpClient.get(getDataurl);
   }
   getSpecificData(url:any, payload:any){

    const getDataurl = this.baseUrl+url;
     return this.httpClient.post(getDataurl,payload);
   }
   

  
}
