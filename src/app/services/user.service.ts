import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user";

@Injectable()
export class UserService {
    readonly basePath = "/api/users";

    constructor(
        private http: HttpClient,
    ) {}
    

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.basePath}`);
    }

    getUser(id: string): Observable<User> {
        return this.http.get<User>(`${this.basePath}/${id}`);
    }

    updateUser(user: Partial<User>): Observable<User> {
        return this.http.put<User>(`${this.basePath}/`, user);
    }
}