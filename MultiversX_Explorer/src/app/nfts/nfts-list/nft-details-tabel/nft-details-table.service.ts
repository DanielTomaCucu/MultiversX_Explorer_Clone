import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class NftDetailsTableService {
  private nftList = `${environment.baseUrl}/collections/`;
  constructor(private http: HttpClient) {}
  getNftList(
    collection: string,
    from: number = 0,
    size: number = 25
  ): Observable<any> {
    return this.http.get<any>(
      `${this.nftList}${collection}/nfts?from=${from}&size=${size}`
    );
  }
}
