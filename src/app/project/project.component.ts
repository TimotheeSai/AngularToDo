import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Project } from '../project';
import { TagComponent } from '../shared/tag/tag.component';
import { PillComponent } from '../shared/pill/pill.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { ProjectEditorComponent } from '../project-editor/project-editor.component';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-project',
    standalone: true,
    imports: [TagComponent, PillComponent, ProjectEditorComponent, ModalComponent],
    templateUrl: './project.component.html',
    styleUrl: './project.component.css',
})
export class ProjectComponent {
    projectCategory = "Demande d'autorisation de travaux";
    popupMenuVisible = false;

    @ViewChild('popup') popup!: ElementRef<HTMLDialogElement>;
    @Input() project!: Project;
    @Output() editProject = new EventEmitter<Project>();

    deleteProject() {
        this.projectService.deleteProject(this.project);
        this.togglePopupMenu(false);
    }

    togglePopupMenu(show: boolean) {
        this.popupMenuVisible = show;
        if (show) {
            this.popup.nativeElement.show();
        } else {
            this.popup.nativeElement.close();
        }
    }

    constructor(private projectService: ProjectService) {}
}
