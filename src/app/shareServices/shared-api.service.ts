import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedAPIService {
  baseUrl: string = 'http://103.151.107.153:8000';
  
  constructor(private httpClient: HttpClient) { }

  uploadCSV(file: any) {
    const formData: FormData = new FormData();
    formData.append('salesTargetFile', file, file.name);
    const url = '/sales-target-upload';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    
    return this.httpClient.post<any>(this.baseUrl + url, formData, {
      headers: headers
    });
  }
  
   getAllData(){
    let url='/customer-ageing-data';
    const getDataurl = this.baseUrl+url;
      return this.httpClient.get(getDataurl);
   }
   getCustomerAgeStats() {
    const custStatUrl = this.baseUrl + '/customer-ageing-stats';
    return this.httpClient.get(custStatUrl);
   }
   getSpecificData(url:any, payload:any){
    const getDataurl = this.baseUrl+url;
     return this.httpClient.post(getDataurl,payload);
   }
   
   public getSalesTarget():Observable<any>{
    const url = this.baseUrl+'/sales-target-data';
    return this.httpClient.get(url);
   }
}
