import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class NftDetailsService {
  private collectionDetals = `${environment.baseUrl}/collections`;
  constructor(private http: HttpClient) {}
  getCollectionDetails(collection: string): Observable<any> {
    return this.http.get<any>(`${this.collectionDetals}/${collection}`);
  }
}
