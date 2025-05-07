import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [JokeFormComponent, JokeListComponent]
})
export class AppComponent {
  title = 'jokes-manager';
}
