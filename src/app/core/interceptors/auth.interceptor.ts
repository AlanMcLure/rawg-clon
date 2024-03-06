import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + environment.API_KEY)
  });
  return next(req);
};
