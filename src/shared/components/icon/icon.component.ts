import { Component, computed, input } from '@angular/core';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'svg[uiIcon]',
  standalone: true,
  template: `<svg:use [attr.href]="'/icons/sprite.svg#icon-' + name()"></svg:use>`,
  host: {
    '[class]': 'hostClasses()',
    '[attr.viewBox]': '"0 0 24 24"',
    '[attr.fill]': '"none"',
    '[attr.aria-hidden]': '!label() ? "true" : null',
    '[attr.aria-label]': 'label() || null',
    '[attr.role]': 'label() ? "img" : null',
    '[attr.focusable]': '"false"',
    '[style]': 'hostStyles()',
  },
})
export class IconComponent {
  name = input.required<string>();
  size = input<IconSize>('md');
  label = input<string>('');
  secondaryOpacity = input<number>(0.5);

  private readonly sizes: Record<IconSize, string> = {
    xs: 'size-3',
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-6',
    xl: 'size-8',
  };

  protected readonly hostClasses = computed(() =>
    ['inline-flex items-center justify-center shrink-0 align-middle', this.sizes[this.size()]].join(
      ' ',
    ),
  );

  protected readonly hostStyles = computed(() => {
    return `--icon-secondary-opacity: ${this.secondaryOpacity()}`;
  });
}
