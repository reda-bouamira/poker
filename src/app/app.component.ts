import { Component } from '@angular/core';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poker';

  players = [{ }];

  getRequestString = '';

  addPlayer(name, cards){
    var newPlayer = {
      name: name,
      cards: cards
    };

    this.players.push(newPlayer);
    this.getRequestString = JSON.stringify(this.players);
  }
}
