import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameSearchService } from '../../services/game-search.service';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-games-page',
  standalone: true,
  providers: [AutoDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.css'
})
export class GamesPageComponent implements OnInit {
  constructor(
    private gameSearchService: GameSearchService, 
    public destroy$: AutoDestroyService
  ) { }
  ngOnInit(): void {
    this.gameSearchService
      .searchGames()
      .pipe(takeUntil(this.destroy$))
      .subscribe((games) => {
        console.log(games);
      });
  }
}
