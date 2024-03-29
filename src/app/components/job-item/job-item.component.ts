import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Job } from '../../models/job.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'job-item',
    standalone: true,
    imports: [],
    templateUrl: './job-item.component.html',
    styleUrl: './job-item.component.css',
})
export class JobItemComponent {
    router = inject(Router);
    route = inject(ActivatedRoute);

    /**
     * The job to display
     */
    @Input({ required: true }) job!: Partial<Job>;

    /**
     * Emits when the star is clicked
     */
    @Output() starClicked = new EventEmitter<Partial<Job>>();

    /**
     * Emits when the star is clicked
     */
    onStarClick() {
        this.job.starred = !this.job.starred;
        this.starClicked.emit(this.job);
    }

    /**
     * Navigate to the job details page
     */
    onJobClick() {
        this.router.navigate([this.job.id], { relativeTo: this.route });
    }
}
