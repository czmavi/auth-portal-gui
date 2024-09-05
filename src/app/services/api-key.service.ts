import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApiKey } from "../model/api-key";

@Injectable()
export class ApiKeyService {
    readonly basePath = "/api/api-keys";

    constructor(
        private http: HttpClient,
    ) {}
    

    getApiKeys(): Observable<ApiKey[]> {
        return this.http.get<ApiKey[]>(`${this.basePath}`);
    }

    getApiKey(id: string): Observable<ApiKey> {
        return this.http.get<ApiKey>(`${this.basePath}/${id}`);
    }

    updateApiKey(apiKey: Partial<ApiKey>): Observable<ApiKey> {
        return this.http.put<ApiKey>(`${this.basePath}/`, apiKey);
    }

    deleteApiKey(id: string): Observable<void> {
        return this.http.delete<void>(`${this.basePath}/${id}`);
    }

    createApiKey(apiKey: Partial<ApiKey>): Observable<ApiKey> {
        return this.http.post<ApiKey>(`${this.basePath}/`, apiKey);
    }
}