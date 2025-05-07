import { Component, OnInit } from '@angular/core';
import { JokeService, Joke } from '../../services/joke.service';
import { JokeModalComponent } from '../joke-modal/joke-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
  imports: [JokeModalComponent, CommonModule],
  standalone: true,
})
export class JokeListComponent implements OnInit {
  jokes: Joke[] = [];
  selectedJoke: Joke | null = null;

  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {
    this.jokeService.getJokes().subscribe(jokes => {
      this.jokes = jokes;
    });
  }

  openEditModal(joke: Joke): void {
    this.selectedJoke = { ...joke };
  }

  closeEditModal(): void {
    this.selectedJoke = null;
  }

  saveJoke(joke: Joke): void {
    this.jokeService.updateJoke(joke);
    this.closeEditModal();
  }
}