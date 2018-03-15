import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  constructor (private http: Http) {}
  
  getUsers (): Observable<any[]> {
    return this.http.get('http://mocker.egen.io/users')
                    .map(response => response.json())
                    .catch(error => Observable.throw(error.statusText));
  }
}