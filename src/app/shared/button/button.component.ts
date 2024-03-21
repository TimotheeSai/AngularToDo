import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [NgClass],
    template: `
        <button
            [ngClass]="variant"
            [type]="type"
        >
            <ng-content></ng-content>
        </button>
    `,
    styleUrl: './button.component.css',
})
export class ButtonComponent {
    @Input() type?: 'button' | 'submit' = 'button';
    @Input() form?: string = '';
    @Input() variant?: 'primary' | 'secondary' = 'primary';
}
