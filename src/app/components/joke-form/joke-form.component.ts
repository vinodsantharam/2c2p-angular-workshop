import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { FormsModule } from '@angular/forms';
import { ChuckNorrisJokeService } from '../../services/chuck-norris-joke.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class JokeFormComponent {
  newJoke: string = '';

  constructor(private jokeService: JokeService, private chuckNorrisJokeService: ChuckNorrisJokeService) {}

  addJoke(): void {
    if (this.newJoke.trim()) {
      this.jokeService.addJoke(this.newJoke);
      this.newJoke = '';
    }
  }

  addChuckNorrisJoke(): void {
    this.chuckNorrisJokeService.getJoke().subscribe( joke => {
      this.jokeService.addJoke(joke.value);
      this.newJoke = '';
    })
  }
}