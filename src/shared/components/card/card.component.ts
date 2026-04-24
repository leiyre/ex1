import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DateComponent } from '../date/date.component';
@Component({
  selector: 'article[uiCard]',
  standalone: true,
  imports: [DateComponent, RouterLink],
  host: {
    class:
      'relative flex flex-col gap-4 bg-surface-card [&:has(:focus-visible)]:ring-3 [&:has(:focus-visible)]:ring-primary',
    '[class.group]': 'route()',
  },
  templateUrl: './card.component.html',
})
export class CardComponent {
  imageSrc = input.required<string>();
  imageSrcset = input<string>('');
  imageAlt = input<string>('');
  description = input.required<string>();
  title = input.required<string>();
  datetime = input.required<string>();
  route = input<string>('/');
}
