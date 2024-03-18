import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JobDetailsComponent } from '../../components/job-details/job-details.component';

@Component({
    selector: 'app-job',
    standalone: true,
    templateUrl: './job.component.html',
    styleUrl: './job.component.css',
    imports: [CommonModule, JobDetailsComponent],
})
export class JobComponent implements OnInit {
    job$!: Observable<Job>;
    route = inject(ActivatedRoute);
    service = inject(JobService);

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.job$ = this.service.getJob(params['id']);
        });
    }
}
