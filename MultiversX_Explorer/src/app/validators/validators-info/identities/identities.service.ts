import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class IdentitiesService {
  identity = `${environment.baseUrl}/identities`;
  nodes = `${environment.baseUrl}/nodes`;
  provider = `${environment.baseUrl}/providers`;

  constructor(private http: HttpClient) { }
  
  getIdentity(identity: string | null): Observable<any> {
    return this.http.get<any>(`${this.identity}/${identity}`);
  }
  getNodes(provider: string, from: number, size: number): Observable<any> {
    return this.http.get<any>(
      `${this.nodes}?from=${from}&size=${size}&provider=${provider}`
    );
  }
  getProviderDetails(provier: string): Observable<any> {
    return this.http.get<any>(`${this.provider}/${provier}`);
  }
}
