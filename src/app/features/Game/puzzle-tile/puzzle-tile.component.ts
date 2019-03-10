import { Component, Input } from '@angular/core';
import { GameTile } from '@/store/game';

@Component({
  selector: 'ata-puzzle-tile',
  templateUrl: './puzzle-tile.component.html',
  styleUrls: ['./puzzle-tile.component.scss']
})
export class PuzzleTileComponent {
  @Input() tile: GameTile;
  @Input() boardSize: number;

  get style() {
    const size = this.boardSize;
    const s = size * 100;
    const h = (this.tile.x * 100 / (size - 1)).toFixed(3);
    const v = (this.tile.y * 100 / (size - 1)).toFixed(3);

    return {
      backgroundSize: `${s}% ${s}%`,
      backgroundPosition: `${h}% ${v}%`,
    };
  }
}
