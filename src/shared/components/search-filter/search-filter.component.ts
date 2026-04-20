import { Component, input, output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'ui-search-filter',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './search-filter.component.html',
  host: {
    class: 'relative',
  },
})
export class SearchFilterComponent {
  readonly id = input<string>('search-filter');
  readonly idControls = input<string>('search-results');
  readonly resultsCount = input(0);
  queryChange = output<string>();

  onQueryInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.queryChange.emit(target?.value ?? '');
  }
}
