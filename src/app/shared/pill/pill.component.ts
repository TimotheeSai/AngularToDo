import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-pill',
    standalone: true,
    imports: [TitleCasePipe],
    template: `
        <span class="pill">
            {{ text | titlecase }}
        </span>
    `,
    styleUrl: './pill.component.css',
})
export class PillComponent {
    @Input() text!: string;
    @Input() type!: string;
}
