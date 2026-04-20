import { Component, computed, input } from '@angular/core';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconVariant = 'default';

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
  variant = input<IconVariant>('default');
  label = input<string>('');
  secondaryOpacity = input<number>(0.5);

  private readonly sizes: Record<IconSize, string> = {
    xs: 'size-3',
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-6',
    xl: 'size-8',
  };

  private readonly variantTokens: Record<IconVariant, { primary: string; secondary: string }> = {
    default: { primary: '#1C274C', secondary: '#1C274C' },
  };

  protected readonly hostClasses = computed(() =>
    ['inline-flex items-center justify-center shrink-0 align-middle', this.sizes[this.size()]].join(
      ' ',
    ),
  );

  protected readonly hostStyles = computed(() => {
    const tokens = this.variantTokens[this.variant()];
    return [
      `--icon-primary: ${tokens.primary}`,
      `--icon-secondary: ${tokens.secondary}`,
      `--icon-secondary-opacity: ${this.secondaryOpacity()}`,
    ].join('; ');
  });
}
