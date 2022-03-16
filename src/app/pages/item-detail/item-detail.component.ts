import { ItemService } from './../../core/services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/core/services/models/item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  public item?: Items;


  constructor(
    private route: ActivatedRoute,
    private ItemsService: ItemService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const itemId = params["id"];
      this.ItemsService.getItemsById(itemId).subscribe((Item) =>{
        this.item = item;
      }) 
    });
    

}
