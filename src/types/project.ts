export interface Project {
    id: number;
    name: string;
    url: string;
    created_at: Date;
    modified_at: Date;
    docker: string;
    version: string;
    docker_volume: string;
}