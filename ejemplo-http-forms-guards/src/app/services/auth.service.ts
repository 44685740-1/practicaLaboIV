import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public estaLogueado : boolean = false;
  constructor() { }
}
