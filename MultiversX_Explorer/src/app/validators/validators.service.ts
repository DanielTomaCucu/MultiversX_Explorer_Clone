import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  private validators = `${environment.baseUrl}/nodes?type=validator`;
  constructor(private http: HttpClient) {}

  getValidators(): Observable<any> {
    return this.http.get<any>(this.validators);
  }
}
