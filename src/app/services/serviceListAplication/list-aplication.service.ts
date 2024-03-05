import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListAplicationService {
  // updateUserStatus(userId: string, arg1: string) {
  //   throw new Error('Method not implemented.');
  // }
  private apiUrl = 'https://unicorcard.herokuapp.com'; 

  constructor(private http: HttpClient) { }

  getApplications(): Observable<any> {
    const url = `${this.apiUrl}/api/application`;
    return this.http.get(url);
  }
  updateApplicationStatus(applicationId: string, status: string): Observable<any> {
    const url = `${this.apiUrl}/api/application/`;
    const body = {
      _id: applicationId,
      status: status
    };
    return this.http.put(url, body);
  }
}