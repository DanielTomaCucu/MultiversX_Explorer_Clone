import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingSpinnerService } from './loading-spinner.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingSpinnerService: LoadingSpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingSpinnerService.isLoading.next(true);

    return next
      .handle(req)
      .pipe(finalize(() => this.loadingSpinnerService.isLoading.next(false)));
  }
}
