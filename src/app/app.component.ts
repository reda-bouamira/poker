import { Component } from '@angular/core';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response: any;
  playersString;
  winnerString;
  title = 'Poker';
  players = Array();

  // Adds a player to the players list
  addPlayer(playerInfo){
    var name = playerInfo.split(',', 1)[0];
    var cards = playerInfo.split(',').slice(1).join(',').trim();

    var newPlayer = {
      name: name,
      cards: cards
    };

    this.players.push(newPlayer);
    this.playersString = JSON.stringify(this.players);

    // Clears the player_info input value
    (<HTMLInputElement>document.getElementById('player_info')).value = '';
  }

  // Clears the input
  clear(){
    this.playersString = null;
    this.winnerString = null;
    this.response = null;
    this.players = Array();
    (<HTMLInputElement>document.getElementById('player_info')).value = '';
  }

  constructor(private http: HttpClient) {}

  // Sends a get request to the API and gets a response back.
  getResponse(){
    var playersJSON = '{ "Players" : ' + this.playersString + '}';
    var requestString = 'https://pokerwebapi.azurewebsites.net/api/poker?play=' + playersJSON;
    this.response = this.http.get(requestString);
    this.winnerString = 'The winner is: ';
  }
}
