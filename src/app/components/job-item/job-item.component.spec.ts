import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobItemComponent } from './job-item.component';
import { Job } from '../../models/job.model';

describe('JobItemComponent', () => {
    let component: JobItemComponent;
    let fixture: ComponentFixture<JobItemComponent>;
    let job: Partial<Job> = {
        id: 1,
        title: 'Test Job',
        companyName: 'Test Company',
        companyLogo: 'assets/star.svg',
        reference: 'Test Reference',
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [JobItemComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(JobItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        component.job = job;
        expect(component).toBeTruthy();
    });

    it('should display the job', () => {
        component.job = job;
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain('Test Job');
        expect(compiled.querySelector('div').textContent).toContain(
            'Test Company'
        );
        expect(compiled.querySelector('div').textContent).toContain(
            'Test Reference'
        );
    });
});
