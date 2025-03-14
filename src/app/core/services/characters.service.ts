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

  constructor(private http: HttpClient) { }

  private getAuthParams(): string {
    const ts = new Date().getTime();
    const hash = Md5.hashStr(`${ts}${this.privateKey}${this.publicKey}`);
    return `ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
  }

  fetchCharacters(): void {
    this.http.get<any>(`${this.baseUrl}/characters?${this.getAuthParams()}`)
      .subscribe(response => {
        this.characters.set(response.data.results);
      });
  }
}
