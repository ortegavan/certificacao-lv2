import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JobsComponent } from './jobs.component';
import { JobService } from '../../services/job.service';

describe('JobsComponent', () => {
    let component: JobsComponent;
    let fixture: ComponentFixture<JobsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                JobsComponent,
            ],
            providers: [JobService],
        }).compileComponents();

        fixture = TestBed.createComponent(JobsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
