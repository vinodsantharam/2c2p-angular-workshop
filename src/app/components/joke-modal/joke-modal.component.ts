import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../../services/joke.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-joke-modal',
  templateUrl: './joke-modal.component.html',
  styleUrls: ['./joke-modal.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class JokeModalComponent {
  @Input() joke: Joke | null = null;
  @Output() save = new EventEmitter<Joke>();
  @Output() close = new EventEmitter<void>();

  editedContent: string = '';

  ngOnChanges(): void {
    if (this.joke) {
      this.editedContent = this.joke.content;
    }
  }

  saveJoke(): void {
    if (this.joke && this.editedContent.trim()) {
      this.save.emit({ ...this.joke, content: this.editedContent });
    }
  }

  closeModal(): void {
    this.close.emit();
  }
}