import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisJokeService {
  
  constructor(private httpClient: HttpClient) {
  }

  getJoke(): Observable<ChuckNorrisJoke> {
    return this.httpClient.get<ChuckNorrisJoke>('https://api.chucknorris.io/jokes/random');
  }
}

type ChuckNorrisJoke = {
  categories: any[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}