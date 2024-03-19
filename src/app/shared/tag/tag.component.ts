import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-tag',
    standalone: true,
    imports: [NgClass],
    templateUrl: './tag.component.html',
    styleUrl: './tag.component.css',
})
export class TagComponent {
    @Input() dark: boolean = false;
    @Input() name: string = '';
}
