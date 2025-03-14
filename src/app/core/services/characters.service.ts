import { Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';
import { Character } from '../../shared/models/characters';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private publicKey = environment.marvelPublicKey;
  private privateKey = environment.marvelPrivateKey;
  private baseUrl = environment.baseUrl;

  characters: WritableSignal<Character[]> = signal([]);
  totalCharacters = signal<number>(0);
  currentPage = signal<number>(1);
  pageSize = 10;

  constructor(private http: HttpClient) {
    this.fetchCharacters();
  }

  private getAuthParams(): string {
    const ts = new Date().getTime();
    const hash = Md5.hashStr(`${ts}${this.privateKey}${this.publicKey}`);
    return `ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
  }

  fetchCharacters(page: number = 1, searchTerm: string = ''): void {
    const apiPage = Math.max(page - 1, 0);
    const offset = apiPage * this.pageSize;

    let url = `${this.baseUrl}/characters?${this.getAuthParams()}&limit=${this.pageSize}&offset=${offset}`;

    if (searchTerm.trim()) {
      url += `&nameStartsWith=${encodeURIComponent(searchTerm)}`;
    }

    this.http.get<any>(url)
      .subscribe((response) => {
        this.characters.set(response.data.results);
        this.totalCharacters.set(response.data.total);
        this.currentPage.set(page);
      });
  }
}
