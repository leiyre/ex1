import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'article[uiCardOverlay]',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './card-overlay.component.html',
  host: {
    class:
      'relative flex overflow-hidden rounded-xl w-card-overlay lg:w-card-overlay-lg aspect-[3/4]',
  },
})
export class CardOverlayComponent {
  imageSrc = input<string>('/images/overlay-360x480.png');
  imageSrcset = input<string>('');
  imageAlt = input<string>('');
  title = input.required<string>();
  description = input.required<string>();
  ctaLabel = input<string>('Lorem ipsum');
  downloadUrl = input<string | null>(null);
  downloadName = input<string>('');

  private static uid = 0;
  protected readonly cardOverlayTitleId = `feature-title-${++CardOverlayComponent.uid}`;
}
