import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    form = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
            nonNullable: true,
        }),
        password: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
    });

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
    ) {}

    login(): void {
        if (this.form.valid) {
            this.authService.login(this.form.controls.email.getRawValue(), this.form.controls.password.getRawValue()).subscribe(user => {
                if (user) {
                    this.router.navigate(['/account']);
                }
            });
        }
    }
}
