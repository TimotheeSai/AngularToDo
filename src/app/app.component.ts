import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectService } from './project.service';
import { RouterOutlet } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectEditorComponent } from './project-editor/project-editor.component';
import { ButtonComponent } from './shared/button/button.component';
import { ModalComponent } from './shared/modal/modal.component';
import { Project } from './project';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ProjectComponent, ProjectEditorComponent, ButtonComponent, ModalComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    title = 'Liste des demandes';
    subTitle = "Gérer les demandes d'autorisation de travaux.";
    projectList: Project[] = [];
    editedProject?: Project;
    modalContent: {
        title: "Ajouter une demande d'autorisation" | "Modifier la demande d'autorisation";
        confirmButtonText: 'Créer' | 'Editer';
    } = {
        title: "Ajouter une demande d'autorisation",
        confirmButtonText: 'Créer',
    };
    @ViewChild('modal') modal!: ModalComponent;
    @ViewChild('editor') editor!: ProjectEditorComponent;

    getProjects(): void {
        this.projectService.getProjects().subscribe((projects) => (this.projectList = projects));
    }

    setEditedProject(project?: Project) {
        this.editedProject = project;
        this.modalContent = project
            ? {
                  title: "Modifier la demande d'autorisation",
                  confirmButtonText: 'Editer',
              }
            : {
                  title: "Ajouter une demande d'autorisation",
                  confirmButtonText: 'Créer',
              };
        this.modal.show();
    }

    onFormValid(isValid: boolean) {
        if (!isValid) return;
        this.modal.close();
    }

    onModalConfirm(confirmed: boolean) {
        if (!confirmed) return;
        this.editor.form.ngSubmit.emit();
    }

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.getProjects();
    }
}
