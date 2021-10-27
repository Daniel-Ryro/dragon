import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/auth/models/user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor() {}
  private readonly TOKEN_USER: string = 'user-token';

  setUserLocalStorage(user: User) {
    localStorage.setItem(this.TOKEN_USER, JSON.stringify(user));
  }

  logout() : void {
    localStorage.removeItem(this.TOKEN_USER);
  }

  _isMokedUser(user: User): boolean {
    if(user.userName === 'dragons' && user.password === 'dragons123') {
      return true;
    }
    return false;
  }

  login(user: User): Observable<any> {
    /*
      We don't have any End Point to login.
      So, we just check if the user contains the same fields of mocked login
    */
      return new Observable(observer => {
        setTimeout(() => {
          if(this._isMokedUser(user)) {
            this.setUserLocalStorage(user);
            observer.next({message: 'successfully logged in'});
            return observer.complete();
          }

          observer.error({message: 'Invalid username or password'});
          observer.next(false);
          return observer.complete();
        }, 1000)
      })
  }

  isLogged(): boolean {
    return !!localStorage.getItem(this.TOKEN_USER);
  }

}
