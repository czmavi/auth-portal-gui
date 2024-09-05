import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'logout',
    template: '',
})
export class LogoutComponent implements OnInit {
    constructor(
        public readonly authService: AuthService,
        public readonly router: Router,
    ) {
        
    }

    ngOnInit(): void {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/auth/login']);
        });
    }
}