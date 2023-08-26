import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class TokenDetailsService {
  
  private getTokenDetails = `${environment.baseUrl}/tokens/{identifier}`;
  constructor(private http: HttpClient) { }

  getTokensDetails(identifier: any): Observable<any> {
    const addr = this.getTokenDetails.replace('{identifier}', identifier);
    return this.http.get<any>(addr);
  }
}
