import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class NetworkInfoService {
  private epoch = `${environment.baseUrl}/rounds?size=1`;
  private EGDLPrice = `${environment.baseUrl}/economics?extract=price`;
  private tokensCount = `${environment.baseUrl}/tokens/count`;
  constructor(private http: HttpClient) { }
  getRounds():Observable<any> {
    return this.http.get<any>(this.epoch);
  }
  getPrice(): Observable<any>{
    return this.http.get<any>(this.EGDLPrice);
  }
  getTokensCount(): Observable<any>{
    return this.http.get<any>(this.tokensCount)
  }
}
