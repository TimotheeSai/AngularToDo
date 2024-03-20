import { Project } from '../project';
import { Component, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-project-editor',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass],
    templateUrl: './project-editor.component.html',
    styleUrl: './project-editor.component.css',
})
export class ProjectEditorComponent implements OnChanges {
    @ViewChild('form') form!: NgForm;
    @Input() project?: Project;
    @Output() formValid = new EventEmitter<boolean>();

    projectForm = this.formBuilder.group({
        name: [this.project?.name ?? '', Validators.required],
        user: [this.project?.user ?? '', Validators.required],
        contract: [this.project?.contract ?? ''],
    });

    constructor(
        private formBuilder: FormBuilder,
        private projectService: ProjectService
    ) {}

    ngOnChanges() {
        this.projectForm.reset(this.project);
    }

    get name() {
        return this.projectForm.get('name');
    }

    get user() {
        return this.projectForm.get('user');
    }

    onSubmit() {
        this.projectForm.markAllAsTouched();
        if (this.projectForm.invalid) {
            this.formValid.emit(false);
            return;
        }
        if (!this.project) {
            this.projectService.createProject({
                contract: this.projectForm.value.contract ?? '',
                name: this.projectForm.value.name ?? '',
                user: this.projectForm.value.user ?? '',
                status: 'statut',
            });
        } else {
            this.projectService.updateProject({
                id: this.project.id,
                contract: this.projectForm.value.contract ?? '',
                name: this.projectForm.value.name ?? '',
                user: this.projectForm.value.user ?? '',
                status: 'statut',
            });
        }
        this.projectForm.reset();
        this.formValid.emit(true);
    }
}
