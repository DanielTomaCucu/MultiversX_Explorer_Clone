import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class LatestBlocksService {
  private blocks = `${environment.baseUrl}/blocks?size=5`;
  constructor(private http: HttpClient) {}
  getBlocks(): Observable<any> {
    return this.http.get<any>(this.blocks);
  }
}
