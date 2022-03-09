import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl= 'http://www.nokeynoshade.party/api/queens/all';

//La petición character
const characterUrl = this.baseUrl + 'character';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(characterUrl);
  }
}
