import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class NodesService {
  private nodes = `${environment.baseUrl}/nodes`;
  constructor(private http: HttpClient) {}

  getNodes(page: number, size: number, filters?: any): Observable<any> {
    let params = new HttpParams();
    for (const key in filters) {
      if (filters[key]) {
        params = params.append(key, filters[key]);
      }
    }
    return this.http.get(`${this.nodes}?from=${page}&size=${size}`, { params });
  }
}
