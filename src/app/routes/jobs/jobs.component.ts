import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../services/job.service';
import { Observable } from 'rxjs';
import { Job } from '../../models/job.model';
import { JobListComponent } from '../../components/job-list/job-list.component';
import { TabsComponent } from '../../components/tabs/tabs.component';

@Component({
    selector: 'app-jobs',
    standalone: true,
    templateUrl: './jobs.component.html',
    styleUrl: './jobs.component.css',
    imports: [CommonModule, JobListComponent, TabsComponent],
})
export class JobsComponent implements OnInit {
    service = inject(JobService);
    jobs$!: Observable<Partial<Job>[]>;

    ngOnInit() {
        this.jobs$ = this.service.getJobs();
    }

    onStarClick(job: Partial<Job>) {
        this.service.toggleFavorite(job);
    }
}
