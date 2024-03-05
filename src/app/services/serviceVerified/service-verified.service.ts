import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceVerifiedService {
  constructor(private http: HttpClient) {}

  getData(id: string): Observable<any> {
    const url = `http://3.85.53.75:80/api/usuarios/${id}`;
    return this.http.get(url);
  }
}
