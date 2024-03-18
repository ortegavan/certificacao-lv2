import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobDetailsComponent } from './job-details.component';

describe('JobDetailsComponent', () => {
    let component: JobDetailsComponent;
    let fixture: ComponentFixture<JobDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [JobDetailsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(JobDetailsComponent);
        component = fixture.componentInstance;

        component.job = {
            id: 1,
            companyLogo: 'url-to-company-logo',
            companyName: 'Company Name',
            title: 'Job Title',
            reference: 'Job Reference',
            description: 'Job Description',
            types: ['Full-time'],
            industries: ['Technology'],
            publishDate: new Date(),
            location: 'Location',
            starred: false,
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
