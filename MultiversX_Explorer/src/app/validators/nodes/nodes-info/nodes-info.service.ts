import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class NodesInfoService {
  private nodeInfo = `${environment.baseUrl}/nodes/`;
  constructor(private http: HttpClient) {}
  getNodeInfo(bls: string|null): Observable<any> {
    return this.http.get<any>(`${this.nodeInfo}${bls}`);
  }
}
