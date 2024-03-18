import { Component, Input, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Job } from '../../models/job.model';

@Component({
    selector: 'job-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './job-details.component.html',
    styleUrl: './job-details.component.css',
})
export class JobDetailsComponent {
    location = inject(Location);
    @Input({ required: true }) job!: Job;

    /**
     * Go back to the previous page
     */
    back() {
        this.location.back();
    }
}
