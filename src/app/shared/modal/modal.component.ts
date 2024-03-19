import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css',
})
export class ModalComponent {
    @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
    @Input() title: string = '';
    @Input() confirmButtonText?: string = 'Valider';
    @Output() onConfirm = new EventEmitter();


    show() {
        this.dialog.nativeElement.showModal()
    }

    close() {
        this.dialog.nativeElement.close()
    }

    onConfirmEmit(event: Event) {
        this.onConfirm.emit(event);
    }

    onClick(event: MouseEvent) {
        const target = event.target as Element;
        if (target.nodeName === 'DIALOG') {
            this.close();
        }
    }
}
