import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
games = [{
  id: 1,
  name: 'game1'

},{
  id: 2,
  name: 'game2'}]
}
