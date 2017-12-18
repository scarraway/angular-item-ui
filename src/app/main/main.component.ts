import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  items: Item[];
  constructor(private itemService: ItemService) { }

  getAllItems(){
    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

  addItems(){
    var items = [
      new Item("name_" + new Date().getMilliseconds())
    ]

    this.itemService.addItems(items).subscribe(itemResponse => {
      console.log(itemResponse);
    });
  }

  ngOnInit() {
  }

}
