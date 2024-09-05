import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TestAccountService } from "../../../services/test-account.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { Router } from "@angular/router";

@Component({
    selector: "test-account-detail",
    templateUrl: "./test-account-detail.component.html",
})
export class TestAccountDetailComponent implements OnInit {
    @Input({ required: true  }) readonly id: string = '';

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
        description: new FormControl('', {
            nonNullable: true,
        }),
    });

    constructor(
        private readonly testAccountService: TestAccountService,
        private readonly messageService: MessageService,
        private readonly confirmationService: ConfirmationService,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.testAccountService.getTestAccount(this.id).subscribe(testAccount => {
            this.form.controls.firstName.setValue(testAccount.firstName);
            this.form.controls.lastName.setValue(testAccount.lastName);
            this.form.controls.email.setValue(testAccount.email);
            this.form.controls.description.setValue(testAccount.description);
        });
    }

    save(): void {
        const testAccount = {
            _id: this.id,
            firstName: this.form.controls.firstName.getRawValue(),
            lastName: this.form.controls.lastName.getRawValue(),
            description: this.form.controls.description.getRawValue(),
        };

        this.testAccountService.updateTestAccount(testAccount).subscribe(testAccount => {
            this.form.reset(
                {
                    firstName: testAccount.firstName,
                    lastName: testAccount.lastName,
                    email: testAccount.email,
                    description: testAccount.description,
                },
                { emitEvent: false },
            );
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Test Account updated successfully' });
        });
    }

    deleteTestAccount(event: Event): void {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this Test Account?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass:"p-button-danger p-button-text",
            rejectButtonStyleClass:"p-button-text p-button-text",
            acceptIcon:"none",
            rejectIcon:"none",
            accept: () => {
                this.testAccountService.deleteTestAccount(this.id).subscribe(() => {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Test Account deleted successfully' });
                    this.router.navigate(['/account/test-accounts']);
                });
            },
        });
    }
}