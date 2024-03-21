import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
    let component: ProjectComponent;
    let fixture: ComponentFixture<ProjectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProjectComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectComponent);
        component = fixture.componentInstance;
        component.project = {
            id: 1,
            name: 'Projet de travaux lorem ipsum',
            user: 'John Doe',
            contract: 'Contrat 1534885932',
            status: 'statut',
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render content', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.title')?.textContent).toContain('Projet de travaux lorem ipsum');
        expect(compiled.querySelector('.sub_title')?.textContent).toContain("Demande d'autorisation de travaux");
        expect(compiled.querySelector('.tag.dark')?.textContent).toContain('John Doe');
        expect(compiled.querySelector('.tag:not(.dark)')?.textContent).toContain('Contrat 1534885932');
    });
});
