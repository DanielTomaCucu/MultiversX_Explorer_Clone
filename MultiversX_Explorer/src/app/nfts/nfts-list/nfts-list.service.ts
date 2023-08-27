import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class NftsListService {
  private nftslist = `${environment.baseUrl}/collections`;
  constructor(private http: HttpClient) {}
  getListOfNfts(from: number = 0, size: number = 25): Observable<any> {
    return this.http.get<any>(
      `${this.nftslist}?from=${from}&size=${size}&sort=verifiedAndHolderCount&order=desc`
    );
  }
}
