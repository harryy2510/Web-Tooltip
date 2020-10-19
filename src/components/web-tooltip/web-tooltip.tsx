import { createPopper } from '@popperjs/core';
import { Component, Element, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'web-tooltip',
  styleUrl: 'web-tooltip.css',
  shadow: false,
})
export class WebTooltip {
  @State() open: boolean = false;
  @Prop() label: string;
  @Element() el: HTMLElement;

  get tooltip() {
    return this.el.querySelector<HTMLElement>('[data-tooltip]');
  }

  show = () => {
    this.open = true;
    setTimeout(() => {
      createPopper(this.el, this.tooltip, {
        placement: 'bottom',
        strategy: 'fixed',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ],
      });
      this.tooltip.classList.add('tooltip-visible');
    });
  };

  hide = () => {
    this.tooltip.classList.remove('tooltip-visible');
    setTimeout(() => {
      this.open = false;
    }, 150);
  };

  handleMouseEnter = () => {
    this.show();
  };

  handleMouseLeave = () => {
    this.hide();
  };

  addListeners = () => {
    this.el.addEventListener('mouseenter', this.handleMouseEnter);
    this.el.addEventListener('mouseleave', this.handleMouseLeave);
  };

  removeListeners = () => {
    this.el.removeEventListener('mouseenter', this.handleMouseEnter);
    this.el.removeEventListener('mouseleave', this.handleMouseLeave);
  };

  componentDidLoad() {
    this.addListeners();
  }

  disconnectedCallback() {
    this.removeListeners();
  }

  render() {
    return (
      <Host>
        <slot />
        {this.open && (
          <div data-tooltip class="tooltip" role="tooltip">
            {this.label}
          </div>
        )}
      </Host>
    );
  }
}
