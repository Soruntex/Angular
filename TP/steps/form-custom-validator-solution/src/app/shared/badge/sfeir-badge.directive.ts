import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[sfeir-badge]' })
export class SfeirBadgeDirective implements OnInit {
  @Input() person: any;

  constructor(private readonly element: ElementRef, private readonly renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.person?.isManager) {
      this.renderer.setProperty(
        this.element.nativeElement,
        'innerHTML',
        '<i class="material-icons">supervisor_account</i>'
      );
    }
  }
}