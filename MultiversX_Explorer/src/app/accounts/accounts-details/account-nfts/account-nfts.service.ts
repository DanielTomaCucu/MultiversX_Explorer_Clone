import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AccountNftsService {
  private nfts = `${environment.baseUrl}/accounts`;
  constructor(private http: HttpClient) { }
  getNfts(account:string): Observable<any>{
    return this.http.get<any>(
      `${this.nfts}/${account}/nfts?excludeMetaESDT=true`
    );
  }
}
