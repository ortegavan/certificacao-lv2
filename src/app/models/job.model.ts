/**
 * Represents a job
 */
export type Job = {
    id: number;
    title: string;
    reference: string;
    companyName: string;
    companyLogo: string;
    description: string;
    types: string[];
    industries: string[];
    publishDate: Date;
    location: string;
    starred: boolean;
};
