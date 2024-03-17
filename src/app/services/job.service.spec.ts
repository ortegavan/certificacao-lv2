import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JobService } from './job.service';

describe('JobService', () => {
    let service: JobService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(JobService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get jobs', () => {
        expect(service.getJobs).toBeDefined();
    });
});
