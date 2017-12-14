import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]>{
    return this.http.get<Item[]>('/items')
  }

  addItems(items: Item[]): Observable<string>{
    return this.http.post('/items', items, {responseType: 'text'})
  }
  
}
