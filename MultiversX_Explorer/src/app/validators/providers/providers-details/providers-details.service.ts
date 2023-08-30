import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class ProvidersDetailsService {
  private providerDeails = `${environment.baseUrl}/providers`;
  constructor(private http: HttpClient) {}
  getProvidersDetails(address: string): Observable<any> {
    return this.http.get<any>(`${this.providerDeails}/${address}`);
  }
}
