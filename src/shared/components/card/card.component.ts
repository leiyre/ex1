import { Component, input } from '@angular/core';
import { DateComponent } from '../date/date.component';

@Component({
  selector: 'a[uiCard]',
  standalone: true,
  imports: [DateComponent],
  host: {
    class:
      'flex flex-col gap-4 bg-surface-card focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary',
  },
  templateUrl: './card.component.html',
})
export class CardComponent {
  imageSrc = input<string>('https://placehold.co/600x400');
  imageAlt = input<string>('Card image');
  description = input.required<string>();
  title = input.required<string>();
  datetime = input.required<string>();
}
