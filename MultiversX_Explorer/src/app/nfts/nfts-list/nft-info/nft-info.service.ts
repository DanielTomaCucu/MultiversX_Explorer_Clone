import { transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class NftInfoService {
  private nftInfo = `${environment.baseUrl}/nfts/`;
  constructor(private http: HttpClient) {}
  getNftInfo(identifier: any): Observable<any> {
    return this.http.get<any>(`${this.nftInfo}${identifier}`);
  }
  getNftTransactions(identifier: any, from:number, size:number): Observable<any> {
    return this.http.get<any>(
      `${this.nftInfo}${identifier}/transactions?from=${from}&size=${size}&?order=desc`
    );
  }

}
