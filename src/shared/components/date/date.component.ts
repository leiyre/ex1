import { Component, computed, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'ui-date',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './date.component.html',
  host: {
    class: 'inline-flex items-center gap-2 text-medium font-bold leading-none',
  },
})
export class DateComponent {
  iconName = input<string>('calendar');
  iconLabel = input<string>('');
  datetime = input<string>('');
  formattedDate = computed(() => {
    const value = this.datetime();
    if (!value) {
      return '';
    }

    const parsedDate = /^\d{4}-\d{2}-\d{2}$/.test(value)
      ? new Date(`${value}T12:00:00`)
      : new Date(value);

    if (Number.isNaN(parsedDate.getTime())) {
      return '';
    }

    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(parsedDate);
  });
}
