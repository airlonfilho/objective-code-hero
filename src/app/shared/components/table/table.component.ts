import { Component, inject } from '@angular/core';
import { CharactersService } from '../../../core/services/characters.service';
import { Character } from '../../models/characters';
import { TitleCasePipe } from '@angular/common';
import { RemoveYearsPipe } from '../../pipes/remove-years.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TitleCasePipe, RemoveYearsPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  charactersService = inject(CharactersService);

  constructor(){
    this.charactersService.fetchCharacters();
  }

  ngOnInit() {
    console.log(this.characters);
  }

  get characters(): Character[] | null {
    return this.charactersService.characters();
  }

}
