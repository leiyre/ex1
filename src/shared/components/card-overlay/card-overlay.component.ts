import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'article[uiCardOverlay]',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './card-overlay.component.html',
  host: {
    class:
      'relative flex overflow-hidden rounded-xl min-h-[378px] w-[284px] lg:w-[360px] lg:min-h-[480px]',
  },
})
export class CardOverlayComponent {
  imageSrc = input<string>('https://placehold.co/600x600');
  imageAlt = input<string>('');
  title = input.required<string>();
  description = input.required<string>();
  ctaLabel = input<string>('Lorem ipsum');
  downloadUrl = input<string | null>(null);
  downloadName = input<string>('');

  private static uid = 0;
  protected readonly cardOverlayTitleId = `feature-title-${++CardOverlayComponent.uid}`;
}
