import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class TokensListService {
  private tokensList = `${environment.baseUrl}/tokens`;
  constructor(private http: HttpClient) {}
  getTokensList(): Observable<any> {
    return this.http.get<any>(this.tokensList);
  }
}
