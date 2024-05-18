import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubAPIService {

  constructor(private http : HttpClient) { }

  getUser(){
    const userAhuitz =  this.http.get("https://api.github.com/users/44685740-1");
    userAhuitz.subscribe(data => {
      console.log(data);
      return data;
    });
  }




}
