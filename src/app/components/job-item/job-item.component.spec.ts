import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JobItemComponent } from './job-item.component';

describe('JobItemComponent', () => {
    let component: JobItemComponent;
    let fixture: ComponentFixture<JobItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, JobItemComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(JobItemComponent);
        component = fixture.componentInstance;

        component.job = {
            id: 1,
            companyLogo: 'url-to-company-logo',
            companyName: 'Company Name',
            title: 'Job Title',
            reference: 'Job Reference',
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
