import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TestAccount } from "../model/test-account";

@Injectable()
export class TestAccountService {
    readonly basePath = "/api/test-accounts";

    constructor(
        private http: HttpClient,
    ) {}
    

    getTestAccounts(): Observable<TestAccount[]> {
        return this.http.get<TestAccount[]>(`${this.basePath}`);
    }

    getTestAccount(id: string): Observable<TestAccount> {
        return this.http.get<TestAccount>(`${this.basePath}/${id}`);
    }

    updateTestAccount(testAccount: Partial<TestAccount>): Observable<TestAccount> {
        return this.http.put<TestAccount>(`${this.basePath}/`, testAccount);
    }

    deleteTestAccount(id: string): Observable<void> {
        return this.http.delete<void>(`${this.basePath}/${id}`);
    }

    createTestAccount(testAccount: Partial<TestAccount>): Observable<TestAccount> {
        return this.http.post<TestAccount>(`${this.basePath}/`, testAccount);
    }
}