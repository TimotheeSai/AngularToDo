import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock-projects';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    projects: Project[] = [];

    getProjects(): Observable<Project[]> {
        return of(this.projects);
    }

    createProject(project: Project): void {
        project.id = this.projects.length + 1;
        this.projects.push(project)
    }

    updateProject(project: Project): void {
        const oldValue = this.projects.find(value => value.id === project.id)
        this.projects.splice(this.projects.indexOf(oldValue as Project), 1, project);
    }

    deleteProject(project: Project): void {
        this.projects.splice(this.projects.indexOf(project), 1);
    }

    constructor() {
        this.projects = PROJECTS;
    }
}
