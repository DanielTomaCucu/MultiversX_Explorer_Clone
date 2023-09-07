import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class EsdtTokensService {
  private tokens = `${environment.baseUrl}/accounts`;
  constructor(private http: HttpClient) {}
  getTokens(address: string): Observable<any> {
    console.log(address);
    return this.http.get<any>(`${this.tokens}/${address}/tokens`);
  }
}
