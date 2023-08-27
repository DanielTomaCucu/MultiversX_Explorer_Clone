import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class NftsService {
  private nftsCount = `${environment.baseUrl}/nfts/count`;
  private collenctionsCount = `${environment.baseUrl}/collections/count`;
  private resultsCount = `${environment.baseUrl}/results/count`;
  private economics = `${environment.baseUrl}/economics?extract=tokenMarketCap`;
  constructor(private http: HttpClient) {}

  getNftsCount(): Observable<any> {
    return this.http.get<any>(this.nftsCount);
  }
  getCollectionsCount(): Observable<any> {
    return this.http.get<any>(this.collenctionsCount);
  }
  getResultsCount(): Observable<any> {
    return this.http.get<any>(this.resultsCount);
  }
  getMCap(): Observable<any> {
    return this.http.get<any>(this.economics);
  }
}
