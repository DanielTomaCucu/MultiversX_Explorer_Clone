import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class ProvidersDetailsService {
  private providerDeails = `${environment.baseUrl}/providers`;
  private providerNodes = `${environment.baseUrl}/nodes`;
  private providerSmallInfo = `${environment.baseUrl}/providers?owner=`;
  constructor(private http: HttpClient) {}

  getProvidersDetails(address: string): Observable<any> {
    return this.http.get<any>(`${this.providerDeails}/${address}`);
  }
  getProviderSmallInfo(owner: string): Observable<any> {
    return this.http.get<any>(
      `${this.providerSmallInfo}${owner}&withIdentityInfo=true`
    );
  }
  getProvidersNodes(
    provider: string,
    from: number,
    size: number
  ): Observable<any> {
    return this.http.get<any>(
      `${this.providerNodes}?from=${from}&size=${size}&provider=${provider}`
    );
  }
}
