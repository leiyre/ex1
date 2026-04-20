import { Component, output, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'ui-search-filter',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './search-filter.component.html',
  host: {
    class: 'bg-surface-input mb-6 rounded flex items-center gap-2 p-2',
    '[class.ring-3]': 'focused()',
    '[class.ring-primary]': 'focused()',
  },
})
export class SearchFilterComponent {
  protected focused = signal(false);

  onFocus() {
    this.focused.set(true);
  }
  onBlur() {
    this.focused.set(false);
  }
  queryChange = output<string>();

  onQueryInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.queryChange.emit(target?.value ?? '');
  }
}
