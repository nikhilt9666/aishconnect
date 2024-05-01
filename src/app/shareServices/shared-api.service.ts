import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedAPIService {
  uploadCSV(file: any) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    
    return this.httpClient.post<any>('YOUR_API_URL', formData);
  }
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
   
   public getSalesTarget():Observable<any>{
    const url = this.baseUrl+'/sales-target-data';
    return this.httpClient.get(url);
   }
  
   

  
}
