import { ItemService } from './../../../core/services/item.service';
import { Component, OnInit } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from 'src/app/core/services/models/item.model';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class itemComponent implements OnInit {

  characterList: CharacterInterface[] = [];
  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
    this.ItemService.getCharacters()
    .subscribe((data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results;
      const formattedResults = results.map(({ id, name, image }) => ({
        id,
        name,
        image,
      }));
      this.characterList = formattedResults;
    });
  }
}

