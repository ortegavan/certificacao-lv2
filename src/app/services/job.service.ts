import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
    providedIn: 'root',
})
export class JobService {
    endpoint = '/jobs';
    httpClient = inject(HttpClient);
    starred: Partial<Job>[] = [];

    /**
     * Get all favorites
     */
    public get favorites(): Partial<Job>[] {
        return this.starred;
    }

    /**
     * Set favorites
     */
    public set favorites(value: Partial<Job>[]) {
        this.starred = value;
    }

    /**
     * Get all jobs
     */
    public getJobs(): Observable<Partial<Job>[]> {
        return this.httpClient.get<Partial<Job>[]>(this.endpoint).pipe(
            map((jobs) =>
                jobs.map((job) => ({
                    ...job,
                    starred: this.starred.some((s) => s.id === job.id),
                }))
            )
        );
    }

    /**
     * Get a job by id
     */
    public getJob(id: number): Observable<Job> {
        return this.httpClient.get<Job>(`${this.endpoint}/${id}`);
    }

    /**
     * Add/remove a job to/from favorites
     */
    public toggleFavorite(job: Partial<Job>): void {
        const index = this.starred.findIndex((j) => j.id === job.id);
        if (index === -1) {
            this.starred.push(job);
        } else {
            this.starred.splice(index, 1);
        }
    }
}
