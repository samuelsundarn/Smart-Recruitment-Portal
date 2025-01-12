import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  apiEndPoint: string = 'https://freeapi.miniprojectideas.com/api/JobPortal/'

  constructor(private http: HttpClient) { }

  registerEmployer(obj: any) {
    return this.http.post(this.apiEndPoint +'AddNewEmployer', obj)
  }

}
