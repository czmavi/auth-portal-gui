import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../services/user.service";
import { MessageService } from "primeng/api";

@Component({
    selector: "user-detail",
    templateUrl: "./user-detail.component.html",
})
export class UserDetailComponent implements OnInit {
    @Input({ required: true  }) readonly id: string = '';

    roles: string[] = ['Admin', 'User'];

    form = new FormGroup({
        firstName: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
        lastName: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
        email: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
        roles: new FormControl([] as string[], {
            nonNullable: true,
        }),
    });

    constructor(
        private readonly userService: UserService,
        private readonly messageService: MessageService,
    ) { }

    ngOnInit(): void {
        this.userService.getUser(this.id).subscribe(user => {
            this.form.controls.firstName.setValue(user.firstName);
            this.form.controls.lastName.setValue(user.lastName);
            this.form.controls.email.setValue(user.email);
            this.form.controls.roles.setValue(user.roles);
        });
    }

    save(): void {
        const user = {
            _id: this.id,
            firstName: this.form.controls.firstName.getRawValue(),
            lastName: this.form.controls.lastName.getRawValue(),
            roles: this.form.controls.roles.getRawValue(),
        };

        this.userService.updateUser(user).subscribe(user => {
            this.form.reset(
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    roles: user.roles,
                },
                { emitEvent: false },
            )
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User updated successfully' });
        });
    }
}