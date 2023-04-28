import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FetchmemberService {

  constructor(private http: HttpClient) { }
  
  getMembers(){
    return this.http.get<any> (environment.apiurl+"api/v2/getMemberDetails")
      }
  
 
      
}
