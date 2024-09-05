import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, catchError, map, of, tap } from "rxjs";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole[];
}

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}

@Injectable()
export class AuthService {
    readonly basePath = "/api/auth";
    readonly currentUser$ = new ReplaySubject<User>(1);

    constructor(
        private http: HttpClient,
    ) {}

    login(email: string, password: string): Observable<User | null> {
        return this.http.post<User>(`${this.basePath}/login`, { username: email, password }).pipe(
            catchError(() => of(null)),
            tap(user => this.currentUser$.next(user as any)),
        );
    }

    logout(): Observable<void> {
        return this.http.post<void>(`${this.basePath}/logout`, {}).pipe(
            tap(() => this.currentUser$.next(null as any)),
        );
    }

    isLoggedIn(): Observable<boolean> {
        return this.http.post<User>(`${this.basePath}/refresh`, {}).pipe(
            catchError(() => of(null)),
            tap(user => this.currentUser$.next(user as any)),
            map(user => Boolean(user)),
        );
    }
}