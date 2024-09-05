import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TestAccountService } from "../../../services/test-account.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

@Component({
    selector: "test-account-create",
    templateUrl: "./test-account-create.component.html",
})
export class TestAccountCreateComponent {
    form = new FormGroup({
        firstName: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
        lastName: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
        description: new FormControl('', {
            nonNullable: true,
        }),
    });

    constructor(
        private readonly testAccountService: TestAccountService,
        private readonly router: Router,
        private readonly messageService: MessageService,
    ) { }

    save(): void {
        const testAccount = {
            firstName: this.form.controls.firstName.getRawValue(),
            lastName: this.form.controls.lastName.getRawValue(),
            description: this.form.controls.description.getRawValue(),
        };

        this.testAccountService.createTestAccount(testAccount).subscribe(testAccount => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Test Account created successfully' });
            this.router.navigate(['/account/test-accounts', testAccount._id]);
        });
    }
}