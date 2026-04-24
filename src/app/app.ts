import { Component, computed, signal } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { CardOverlayComponent } from '../shared/components/card-overlay/card-overlay.component';
import { FeatureComponent } from '../shared/components/feature/feature.component';
import { SearchFilterComponent } from '../shared/components/search-filter/search-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, CardOverlayComponent, FeatureComponent, SearchFilterComponent],
  templateUrl: './app.html',
})
export class App {
  private readonly mockedSrcsetH =
    '/images/400.png 400w, /images/640.png 640w, /images/960.png 960w, /images/1280.png 1280w';
  private readonly mockedSrcsetV =
    '/images/overlay-360x480.png 360w, /images/overlay-720x960.png 720w';

  protected readonly title = signal('Challenge 1');
  protected readonly searchQuery = signal('');
  protected readonly cards = [
    {
      route: '/example',
      id: 1,
      imageSrc: '/images/640.png',
      imageSrcset: this.mockedSrcsetH,
      imageAlt: 'lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      datetime: '2026-04-18',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    },
    {
      route: '/example',
      id: 2,
      imageSrc: '/images/640.png',
      imageSrcset: this.mockedSrcsetH,
      imageAlt: 'lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      datetime: '2026-04-15',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    },
    {
      route: '/example',
      id: 3,
      imageSrc: '/images/640.png',
      imageSrcset: this.mockedSrcsetH,
      imageAlt: 'lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      datetime: '2026-04-12',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    },
    {
      route: '/example',
      id: 4,
      imageSrc: '/images/640.png',
      imageSrcset: this.mockedSrcsetH,
      imageAlt: 'lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      datetime: '2026-04-09',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    },
    {
      route: '/example',
      id: 5,
      imageSrc: '/images/640.png',
      imageSrcset: this.mockedSrcsetH,
      imageAlt: 'lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      datetime: '2026-04-06',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    },
    {
      route: '/example',
      id: 6,
      imageSrc: '/images/640.png',
      imageSrcset: this.mockedSrcsetH,
      imageAlt: 'lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      datetime: '2026-04-03',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    },
  ];
  protected readonly cardsOverlay = [
    {
      id: 1,
      imageSrc: '/images/overlay-360x480.png',
      imageSrcset: this.mockedSrcsetV,
      imageAlt: 'lorem ipsum',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      ctaLabel: 'Lorem ipsum',
      downloadUrl: 'https://www.google.com',
      downloadName: 'Lorem',
    },
    {
      id: 2,
      imageSrc: '/images/overlay-360x480.png',
      imageSrcset: this.mockedSrcsetV,
      imageAlt: 'lorem ipsum',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      ctaLabel: 'Lorem ipsum',
      downloadUrl: 'https://www.google.com',
      downloadName: 'Lorem',
    },
    {
      id: 3,
      imageSrc: '/images/overlay-360x480.png',
      imageSrcset: this.mockedSrcsetV,
      imageAlt: 'Imagen card overlay',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      ctaLabel: 'Lorem ipsum',
      downloadUrl: 'https://www.google.com',
      downloadName: 'Lorem',
    },
    {
      id: 4,
      imageSrc: '/images/overlay-360x480.png',
      imageSrcset: this.mockedSrcsetV,
      imageAlt: 'lorem ipsum',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      ctaLabel: 'Lorem ipsum',
      downloadUrl: 'https://www.google.com',
      downloadName: 'Lorem',
    },
  ];
  protected readonly filteredCards = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.cards;
    }

    return this.cards.filter((card) => {
      const searchableContent = `${card.title} ${card.description}`.toLowerCase();
      return searchableContent.includes(query);
    });
  });

  protected onSearchQueryChange(query: string): void {
    this.searchQuery.set(query);
  }
}
