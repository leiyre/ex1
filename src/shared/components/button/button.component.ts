import { Component, ElementRef, computed, inject, input } from '@angular/core';

export type ButtonVariant = 'primary';
export type ButtonSize = 'md';

@Component({
  selector: 'button[uiButton], a[uiButton]',
  standalone: true,
  host: {
    '[class]': 'btnClasses()',
    '[attr.type]': 'hostType()',
    '[attr.disabled]': 'hostDisabled()',
    '[attr.aria-disabled]': 'ariaDisabled()',
    '(click)': 'onClick($event)',
  },
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input(false);
  private readonly hostElement = inject(ElementRef<HTMLElement>);

  private readonly base = [
    'inline-flex items-center justify-center gap-2',
    'relative font-semibold leading-none',
    'rounded border-2 cursor-pointer select-none',
    'transition-all duration-200 ease-in-out',
    'hover:bg-primary-dark hover:border-primary-dark',
    'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary',
  ].join(' ');

  private readonly sizes: Record<ButtonSize, string> = {
    md: 'px-5 py-2',
  };

  private readonly variants: Record<ButtonVariant, string> = {
    primary: [
      'bg-primary border-primary text-inverse',
      'hover:bg-primary-hover hover:border-primary-hover',
    ].join(' '),
  };

  protected readonly btnClasses = computed(() =>
    [
      this.base,
      this.sizes[this.size()],
      this.variants[this.variant()],
      this.disabled() ? 'opacity-45 cursor-not-allowed pointer-events-none' : '',
    ]
      .filter(Boolean)
      .join(' '),
  );

  protected readonly hostType = computed<'button' | 'submit' | 'reset' | null>(() =>
    this.isButtonElement ? this.type() : null,
  );

  protected readonly hostDisabled = computed<'' | null>(() =>
    this.isButtonElement && this.disabled() ? '' : null,
  );

  protected readonly ariaDisabled = computed<'true' | null>(() =>
    !this.isButtonElement && this.disabled() ? 'true' : null,
  );

  onClick(event: Event): void {
    if (!this.isButtonElement && this.disabled()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  private get isButtonElement(): boolean {
    return this.hostElement.nativeElement.tagName.toLowerCase() === 'button';
  }
}
