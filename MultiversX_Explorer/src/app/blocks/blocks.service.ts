import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class BlocksService {
  blocks = `${environment.baseUrl}/blocks`;
  constructor(private http: HttpClient) {}
  getBlocks(from:number, size:number ): Observable<any> {
    return this.http.get<any>(`${this.blocks}?from=${from}&size=${size}&withProposerIdentity=true`);
  }
}
