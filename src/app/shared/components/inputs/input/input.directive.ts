import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[brInput]',
})
export class InputDirective implements OnInit {
  @Input() maxlength: string;
  @Input() type: string;
  @Input() error: string = 'Error! Value is invalid.';
  private label: HTMLElement;
  private hasLabel: boolean;
  private dangerImage: HTMLImageElement;
  private checkImage: HTMLImageElement;
  private errorElement: HTMLImageElement;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setInputStyles();
    const input: HTMLInputElement = this.el.nativeElement;
    this.label = this.el.nativeElement.previousSibling;
    this.hasLabel = this.label?.tagName === 'BR-LABEL';
    if (this.maxlength) {
      const formField = this.el.nativeElement.parentElement;
      this.setMaxLengthBlock(formField, input.value.length, this.maxlength);
    }
    if (
      !this.label ||
      (!input.value && !input.placeholder && this.isTextInputType(this.type))
    )
      return;
    if (!this.hasLabel) return;
    this.setActiveLabelStyles(this.label);
    this.renderer.setStyle(this.label, 'color', '#818181');
  }

  @HostListener('focusout', ['$event.target'])
  outFocus(input: HTMLInputElement) {
    const parent: HTMLElement | null = input.parentElement as HTMLElement;

    this.setStyle('border', '1.5px solid #A1A1A1');
    if (this.hasLabel) {
      this.renderer.setStyle(this.label, 'color', '#818181');
    }
    if (input.validity.valid && input.value) {
      this.setStyle('border-color', '#1F8B24');
      this.checkImage = this.renderer.createElement('img');
      this.checkImage.src = `${environment.images}/green-check.svg`;
      this.renderer.appendChild(parent, this.checkImage);

      this.setInputImageStyle(this.checkImage);
      if (this.hasLabel) {
        this.renderer.setStyle(this.label, 'color', '#1F8B24');
      }
    } else {
      const errorMessage: string = this.el.nativeElement.validationMessage;
      if (errorMessage) {
        this.error = errorMessage;
      }
    }

    if (input.placeholder || input.value || !this.isTextInputType(this.type))
      return;
    if (!this.hasLabel) this.renderer.setStyle(this.label, 'font-size', '16px');
    this.renderer.setStyle(this.label, 'top', '22px');
    this.renderer.setStyle(this.label, 'line-height', '24px');
  }
  @HostListener('focus', ['$event.target'])
  onFocus(input: HTMLInputElement) {
    this.setStyle('border', '1.5px solid #1672EC');
    if (this.dangerImage) {
      this.dangerImage.remove();
    }
    if (this.errorElement) {
      this.errorElement.remove();
    }
    if (this.checkImage) {
      this.checkImage.remove();
    }
    if (!this.hasLabel) return;

    this.setActiveLabelStyles(this.label);
  }
  @HostListener('invalid', ['$event'])
  invalid(e: Event) {
    e.preventDefault();
    const input: HTMLInputElement = e.target as HTMLInputElement;
    const parent: HTMLElement | null = input.parentElement as HTMLElement;

    this.setStyle('border', '1.5px solid #F7716E');

    if (!this.dangerImage) {
      this.dangerImage = this.renderer.createElement('img');
      this.dangerImage.src = `${environment.images}/danger.svg`;
      this.setInputImageStyle(this.dangerImage);
    }
    if (!this.errorElement) {
      this.errorElement = this.renderer.createElement('p');
      const errorText = this.renderer.createText(this.error);
      this.renderer.appendChild(this.errorElement, errorText);
      this.setErrorElementStyle(this.errorElement);
    }

    this.renderer.appendChild(parent, this.dangerImage);
    this.renderer.appendChild(parent, this.errorElement);

    if (!this.hasLabel) return;
    this.renderer.setStyle(this.label, 'color', '#DA100B');
  }
  @HostListener('input', ['$event.target'])
  change(input: HTMLInputElement) {
    const formField = input.parentElement;
    this.renderer.setAttribute(
      formField,
      'data-remaining',
      input.value.length + ''
    );
  }
  setInputImageStyle(dangerImage: HTMLElement): void {
    this.renderer.setStyle(dangerImage, 'position', 'absolute');
    this.renderer.setStyle(dangerImage, 'right', '4px');
    this.renderer.setStyle(dangerImage, 'top', '44%');
    this.renderer.setStyle(dangerImage, 'transform', 'translateY(-50%)');
    this.renderer.setStyle(dangerImage, 'padding', '2px 10px');
    this.renderer.setStyle(dangerImage, 'background', '#ffffff');
    this.renderer.setStyle(dangerImage, 'pointer-events', 'none');
  }
  setErrorElementStyle(errorElement: HTMLElement): void {
    this.renderer.setStyle(errorElement, 'position', 'absolute');
    this.renderer.setStyle(errorElement, 'margin', '0');
    this.renderer.setStyle(errorElement, 'font-size', '12px');
    this.renderer.setStyle(errorElement, 'left', '6px');
    this.renderer.setStyle(errorElement, 'bottom', '0');
    this.renderer.setStyle(errorElement, 'color', '#F5413D');
    this.renderer.setStyle(errorElement, 'white-space', 'nowrap');
    this.renderer.setStyle(errorElement, 'overflow', 'hidden');
    this.renderer.setStyle(errorElement, 'text-overflow', 'ellipsis');
    this.renderer.setStyle(
      errorElement,
      'width',
      `${this.el.nativeElement.offsetWidth}px`
    );

    this.renderer.setAttribute(errorElement, 'title', this.error);
  }
  setInputStyles(): void {
    this.setStyle('border', '1.5px solid #A1A1A1');
    this.setStyle('border-radius', '8px');
    this.setStyle('background', '#FFFFFF');
    this.setStyle('padding', '12px');
    this.setStyle('font-weight', '400');
    this.setStyle('font-size', '16px');
    this.setStyle('outline', 'none');
  }
  setActiveLabelStyles(label: HTMLElement): void {
    this.renderer.setStyle(label, 'font-size', '11px');
    this.renderer.setStyle(label, 'top', '-2px');
    this.renderer.setStyle(label, 'line-height', '12px');
    this.renderer.setStyle(label, 'color', '#1672EC');
  }
  setMaxLengthBlock(
    formField: HTMLElement,
    currLength: number,
    maxlength: string
  ): void {
    this.renderer.addClass(formField, 'len');
    this.renderer.setAttribute(formField, 'data-remaining', `${currLength}`);
    this.renderer.setAttribute(formField, 'data-limit', maxlength);
  }

  isTextInputType(type: string): boolean {
    if (!type) return true;
    const isTextTypes: Array<string> = [
      'text',
      'email',
      'password',
      'number',
      'search',
      'tel',
    ];
    return isTextTypes.includes(type);
  }
  protected setStyle(style: string, property: string) {
    this.renderer.setStyle(this.el.nativeElement, style, property);
  }
}
