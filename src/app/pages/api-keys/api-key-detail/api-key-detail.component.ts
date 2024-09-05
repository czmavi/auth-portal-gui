import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { ApiKeyService } from "../../../services/api-key.service";

@Component({
    selector: "api-key-detail",
    templateUrl: "./api-key-detail.component.html",
})
export class ApiKeyDetailComponent implements OnInit {
    @Input({ required: true  }) readonly id: string = '';

    form = new FormGroup({
        description: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
        secret: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
    });

    constructor(
        private readonly apiKeyService: ApiKeyService,
        private readonly messageService: MessageService,
        private readonly confirmationService: ConfirmationService,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.apiKeyService.getApiKey(this.id).subscribe(apiKey => {
            this.form.controls.secret.setValue(apiKey.secret);
            this.form.controls.description.setValue(apiKey.description);
        });
    }

    save(): void {
        const apiKey = {
            _id: this.id,
            firstName: this.form.controls.description.getRawValue(),
            lastName: this.form.controls.secret.getRawValue(),
        };

        this.apiKeyService.updateApiKey(apiKey).subscribe(apiKey => {
            this.form.reset(
                {
                    secret: apiKey.secret,
                    description: apiKey.description,
                },
                { emitEvent: false },
            );
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Api Key updated successfully' });
        });
    }

    deleteTestAccount(event: Event): void {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this Api Key?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass:"p-button-danger p-button-text",
            rejectButtonStyleClass:"p-button-text p-button-text",
            acceptIcon:"none",
            rejectIcon:"none",
            accept: () => {
                this.apiKeyService.deleteApiKey(this.id).subscribe(() => {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Api Key deleted successfully' });
                    this.router.navigate(['/account/api-keys']);
                });
            },
        });
    }
}