import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { JobDetailsComponent } from '../../components/job-details/job-details.component';

@Component({
    selector: 'app-job',
    standalone: true,
    templateUrl: './job.component.html',
    styleUrl: './job.component.css',
    imports: [CommonModule, JobDetailsComponent],
})
export class JobComponent implements OnInit, OnDestroy {
    job$!: Observable<Job>;
    stop$ = new Subject<void>();
    route = inject(ActivatedRoute);
    service = inject(JobService);

    /**
     * When the component is initialized, get the job by its id
     */
    ngOnInit(): void {
        this.route.params.pipe(takeUntil(this.stop$)).subscribe((params) => {
            this.job$ = this.service.getJob(params['id']);
        });
    }

    /**
     * When the component is destroyed, stop all subscriptions (no need to unsubscribe from route.params but it's a good practice)
     */
    ngOnDestroy(): void {
        this.stop$.next();
        this.stop$.complete();
    }
}
