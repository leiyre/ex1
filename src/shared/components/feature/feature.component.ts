import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';
import { DateComponent } from '../date/date.component';

@Component({
  selector: '[uiFeature]',
  standalone: true,
  imports: [ButtonComponent, DateComponent, RouterLink],
  templateUrl: './feature.component.html',
  host: {
    class: 'flex flex-col lg:flex-row gap-4 bg-surface-card p-8 rounded shadow',
  },
})
export class FeatureComponent {
  imageSrc = input<string>('https://placehold.co/600x400');
  imageAlt = input<string>('');
  datetime = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  ctaLabel = input<string>('Ver mas');
  ctaRoute = input<string[]>(['/']);
}
