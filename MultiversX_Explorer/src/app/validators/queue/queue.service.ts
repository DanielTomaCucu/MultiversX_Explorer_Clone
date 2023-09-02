import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  private nodes = `${environment.baseUrl}/nodes?status=queued`;
  constructor(private http: HttpClient) {}

  getNodes(page: number, size: number): Observable<any> {
    return this.http.get(`${this.nodes}&from=${page}&size=${size}`);
  }
}
