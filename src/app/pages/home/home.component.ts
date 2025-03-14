import { Component, inject, signal } from '@angular/core';
import { SearchComponent } from '../../shared/components/search/search.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { Character } from '../../shared/models/characters';
import { CharactersService } from '../../core/services/characters.service';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, TableComponent, PaginationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  allCharacters = signal<Character[]>([]);
  filteredCharacters = signal<Character[]>([]);

  characters = this.charactersService.characters; // Já é um Signal, não precisa de toSignal
  totalCharacters = this.charactersService.totalCharacters;
  currentPage = this.charactersService.currentPage;
  pageSize = 10;

  searchResult = signal('');

  viewportScroller = inject(ViewportScroller);

  constructor(private charactersService: CharactersService) {
    this.allCharacters = this.charactersService.characters;
    this.filteredCharacters.set(this.allCharacters());
  }

  onSearch(searchTerm: string) {
    this.searchResult.set(searchTerm); 
    this.charactersService.fetchCharacters(1, searchTerm);
  }

  fetchCharacters(page: number) {
    this.charactersService.fetchCharacters(page, this.searchResult());
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    }, 2000);
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
