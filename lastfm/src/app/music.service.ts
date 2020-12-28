import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  *  as  data  from  '../assets/music.json';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

    private _jsonURL = './assets/music.json';
    //private _jsonURL = './data/music.json';
    private musics = data["default"];
    constructor(private http: HttpClient) {
      console.log(data["default"])


    }
   /* public getJSON() {
      return this.http.get(this._jsonURL);
    }*/
    public getJSON() {
      return this.musics;
    }
}
