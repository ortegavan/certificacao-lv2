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
     * Obtém todas as vagas de emprego
     */
    public getJobs(): Observable<Job[]> {
        return this.httpClient.get<Job[]>(this.endpoint);
    }
}
