import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-tag',
    standalone: true,
    imports: [NgClass],
    template: `
        <span
            class="tag"
            [ngClass]="{ dark: dark }"
        >
            {{ name }}
        </span>
    `,
    styleUrl: './tag.component.css',
})
export class TagComponent {
    @Input() dark: boolean = false;
    @Input() name: string = '';
}
