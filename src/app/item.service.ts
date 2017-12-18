import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';
    
@Injectable()
export class ItemService {
  private basePath:string = '/items';
  private constructItemPath(id: string){
    return this.basePath + "/" + id;
  }
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.basePath)
  }

  addItems(items: Item[]): Observable<string>{
    return this.http.post(this.basePath, items, {responseType: 'text'})
  }

  getItem(id: string): Observable<Item>{
    return this.http.get<Item>(this.constructItemPath(id))
  }

  updateItemName(id: string, name: string): Observable<string>{
    return this.http.put(this.constructItemPath(id), {name: name}, {responseType: 'text'})
  }

  deleteItem(id: string): Observable<string>{
    return this.http.delete<string>(this.constructItemPath(id))
  }
  
}
