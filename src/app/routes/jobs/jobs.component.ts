import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';
import { JobListComponent } from '../../components/job-list/job-list.component';
import { TabsComponent } from '../../components/tabs/tabs.component';

@Component({
    selector: 'app-jobs',
    standalone: true,
    templateUrl: './jobs.component.html',
    styleUrl: './jobs.component.css',
    imports: [CommonModule, RouterOutlet, JobListComponent, TabsComponent],
})
export class JobsComponent implements OnInit {
    route = inject(ActivatedRoute);
    service = inject(JobService);
    jobs$!: Observable<Partial<Job>[]>;

    /**
     * When the component is initialized, get all jobs
     */
    ngOnInit() {
        this.jobs$ = this.service.getJobs();
    }

    /**
     * When a star is clicked, add/remove the job to/from favorites
     */
    onStarClick(job: Partial<Job>) {
        this.service.toggleFavorite(job);
    }
}
