import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Game, SearchResult } from '../../../core/models/game';

@Injectable({
  providedIn: 'root'
})
export class GameSearchService {
  $games: WritableSignal<Game[]> = signal([]);
  constructor(private httpClient: HttpClient) { }

  searchGames(): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>(environment.BASE_API_URL + 'games');
  }
  setGames(games: Game[]): void {
    this.$games.set(games);
  }
}
