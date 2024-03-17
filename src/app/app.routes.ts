import { Routes } from '@angular/router';
import { JobsComponent } from './routes/jobs/jobs.component';
import { FavoritesComponent } from './routes/favorites/favorites.component';

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
    {
        path: 'favorites',
        component: FavoritesComponent,
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
