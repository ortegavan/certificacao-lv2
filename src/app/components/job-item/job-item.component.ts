import { Component, EventEmitter, Input, Output } from '@angular/core';
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

    /**
     * Emits when the star is clicked
     */
    @Output() starClicked = new EventEmitter<Partial<Job>>();

    /**
     * Emits when the star is clicked
     */
    onStarClick() {
        this.starClicked.emit(this.job);
    }
}
