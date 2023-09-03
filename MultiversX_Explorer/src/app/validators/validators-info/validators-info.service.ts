import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsInfoService {
  validators = `${environment.baseUrl}/providers?withIdentityInfo=true`;
  private providerNodes = `${environment.baseUrl}/nodes`;
  constructor(private http: HttpClient) {}
  getProviders(): Observable<any> {
    return this.http.get<any>(this.validators);
  }

  
}
