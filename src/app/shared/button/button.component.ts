import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [NgClass],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
})
export class ButtonComponent {
    @Input() type?: 'button' | 'submit' = 'button';
    @Input() form?: string = '';
    @Input() variant?: 'primary' | 'secondary' = 'primary';
    @Output() onClick = new EventEmitter();

    onClickEmit(event: Event) {
        this.onClick.emit(event);
    }
}
