import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

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
    imports: [
        CommonModule,
        RouterOutlet,
        ProjectComponent,
        ProjectEditorComponent,
        ButtonComponent,
        ModalComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'Liste des demandes';
    subTitle = "Gérer les demandes d'autorisation de travaux.";
    projectList: Project[] = [];
    editedProject?: Project
    @ViewChild('modal') modal!: ModalComponent;

    getProjects(): void {
        this.projectService
            .getProjects()
            .subscribe((projects) => (this.projectList = projects));
    }

    setEditedProject(project?: Project) {
        this.editedProject = project;
        this.modal.show()
    }

    onFormValid(isValid: boolean){
        if (!isValid) return
        this.modal.close();
    }

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.getProjects();
    }
    ngAfterViewInit() {
        console.log(this.modal)
    }
}
