import { Component, effect, EventEmitter, Input, Output, signal, Signal, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Input() search: string = '';
  @Output() searchChange = new EventEmitter<string>();

  searchControl = new FormControl('');
  searchSignal: WritableSignal<string> = signal('');

  constructor() {
    // Atualiza o Signal quando o FormControl muda
    this.searchControl.valueChanges.subscribe(value => {
      this.searchSignal.set(value || '');
      this.searchChange.emit(value || '');
    });

    // Reage às mudanças do Signal
    effect(() => {
      console.log('Pesquisa atual:', this.searchSignal());
    });
  }


}
