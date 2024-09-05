import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { User } from "../../../model/user";

@Component({
    selector: "user-list",
    templateUrl: "./user-list.component.html",
})
export class UserListComponent implements OnInit {
    users: User[] = [];
    loading = true;

    constructor(
        private readonly userService: UserService,
    ) {
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
            this.loading = false;
        });
    }
}
