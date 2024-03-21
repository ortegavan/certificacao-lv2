import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/job.model';
import { JobItemComponent } from '../job-item/job-item.component';

@Component({
    selector: 'job-list',
    standalone: true,
    templateUrl: './job-list.component.html',
    styleUrl: './job-list.component.css',
    imports: [JobItemComponent],
})
export class JobListComponent {
    /**
     * The list of jobs to display.
     */
    @Input() jobs!: Partial<Job>[];

    /**
     * Emits when the star is clicked
     */
    @Output() starClicked = new EventEmitter<Partial<Job>>();

    /**
     * Emits when the star is clicked
     */
    onStarClick(job: Partial<Job>) {
        this.starClicked.emit(job);
    }
}
