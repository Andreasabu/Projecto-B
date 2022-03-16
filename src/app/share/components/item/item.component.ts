import { Item } from './../../../core/services/models/item.model';
import { ItemService } from './../../../core/services/item.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class itemComponent implements OnInit {

  itemList: Item[] = [];
  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
    this.ItemService.getItems()
    .subscribe((data: Item) => {
      const results: Item[] = data.results;
      const formattedResults = results.map(({ id, name, image }) => ({
        id,
        name,
        image,
      }));
      this.itemList = formattedResults;
    });
  }
}

