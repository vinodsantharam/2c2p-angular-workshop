import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Joke {
  id: number;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private jokes: Joke[] = [
    { id: 1, content: 'Why did the scarecrow become a motivational speaker? Because he was outstanding in his field!' }
  ];
  private jokesSubject = new BehaviorSubject<Joke[]>(this.jokes);

  getJokes(): Observable<Joke[]> {
    return this.jokesSubject.asObservable();
  }

  addJoke(content: string): void {
    const newJoke: Joke = {
      id: this.jokes.length + 1,
      content
    };
    this.jokes = [...this.jokes, newJoke];
    this.jokesSubject.next(this.jokes);
  }

  updateJoke(updatedJoke: Joke): void {
    this.jokes = this.jokes.map(joke =>
      joke.id === updatedJoke.id ? updatedJoke : joke
    );
    this.jokesSubject.next(this.jokes);
  }
}