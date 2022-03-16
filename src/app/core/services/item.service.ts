import { Item } from 'src/app/core/services/models/item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private HttpClient: HttpClient
    ) { }

    public getItems(): Observable<Item[]> {

      this.HttpClient.get(`${environment.baseUrl}items`) as Observable<Item[]>;
    }
    public getItemsById(id: string): Observable<Item[]> {

      this.HttpClient.get(`${environment.baseUrl}items/${id}`) as Observable<Item[]>;
    }
}
