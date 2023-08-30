import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class TxHashService {
  txHash = `${environment.baseUrl}/transaction`;
  constructor(private http: HttpClient) {}
  getTxHash(txHash: string|null): Observable<any> {
    return this.http.get<any>(`${this.txHash}/${txHash}`);
  }
}
