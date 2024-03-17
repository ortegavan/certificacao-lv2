import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
    providedIn: 'root',
})
export class JobService {
    endpoint = '/jobs';
    httpClient = inject(HttpClient);

    /**
     * Get all jobs
     */
    public getJobs(): Observable<Partial<Job>[]> {
        return this.httpClient.get<Partial<Job>[]>(this.endpoint);
    }
}
