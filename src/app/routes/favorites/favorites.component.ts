import { Component, inject } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';
import { JobListComponent } from '../../components/job-list/job-list.component';

@Component({
    selector: 'app-favorites',
    standalone: true,
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.css',
    imports: [RouterOutlet, TabsComponent, JobListComponent],
})
export class FavoritesComponent {
    route = inject(ActivatedRoute);
    service = inject(JobService);

    onStarClick(job: Partial<Job>) {
        this.service.toggleFavorite(job);
    }
}
