import { Routes } from '@angular/router';
import { JobsComponent } from './routes/jobs/jobs.component';

export const routes: Routes = [
    { path: '', redirectTo: 'jobs', pathMatch: 'full' },
    {
        path: 'jobs',
        component: JobsComponent,
        children: [
            {
                path: ':id',
                loadComponent: () =>
                    import('./routes/job/job.component').then(
                        (m) => m.JobComponent
                    ),
            },
        ],
    },
    { path: '**', redirectTo: 'jobs' },
];
