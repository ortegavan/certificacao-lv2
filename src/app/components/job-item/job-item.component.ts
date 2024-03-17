import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
    selector: 'job-item',
    standalone: true,
    imports: [],
    templateUrl: './job-item.component.html',
    styleUrl: './job-item.component.css',
})
export class JobItemComponent {
    /**
     * The job to display
     */
    @Input({ required: true }) job!: Partial<Job>;
}
