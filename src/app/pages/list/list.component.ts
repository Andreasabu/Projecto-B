import { ItemService } from './../../core/services/item.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items } from 'src/app/core/services/models/item.model';
import { itemComponent } from 'src/app/share/components/item/item.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public items: Items;
    constructor( 
  private itemsService : ItemService)

  { console.log("me he construido");
  }

  ngOnInit(): void {
    console.log("me he iniciado");
    this.itemsService.getItems().subscribe((items) => {
      this.items = items;
    })
    
  }
  public getItems() {
    this.ItemsService.getItems().subscribe((items) => {
      console.log(items);
      this.items = items;
    });
  }
}
