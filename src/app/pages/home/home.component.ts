import { Component, signal } from '@angular/core';
import { SearchComponent } from '../../shared/components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  searchResult = signal('');
  
  constructor() {}

  onSearch(value: string) {
    this.searchResult.set(value);
  }

}
