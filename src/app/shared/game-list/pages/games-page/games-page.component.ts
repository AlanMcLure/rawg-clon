import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameSearchService } from '../../services/game-search.service';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { takeUntil } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-games-page',
  standalone: true,
  providers: [AutoDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.css'
})
export class GamesPageComponent implements OnInit {
  $games = this.gameSearchService.$games;
  constructor(
    private gameSearchService: GameSearchService, 
    public destroy$: AutoDestroyService
  ) { }
  ngOnInit(): void {
    this.gameSearchService
      .searchGames()
      .pipe(takeUntil(this.destroy$))
      .subscribe((games) => {
        this.gameSearchService.setGames(games.results);
        console.log(games);
      });
  }
}
