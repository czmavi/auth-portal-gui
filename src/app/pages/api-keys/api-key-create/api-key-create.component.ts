import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { ApiKeyService } from "../../../services/api-key.service";

@Component({
    selector: "api-key-create",
    templateUrl: "./api-key-create.component.html",
})
export class ApiKeyCreateComponent {
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
        private readonly router: Router,
        private readonly messageService: MessageService,
    ) { }

    save(): void {
        const apiKey = {
            secret: this.form.controls.secret.getRawValue(),
            description: this.form.controls.description.getRawValue(),
        };

        this.apiKeyService.createApiKey(apiKey).subscribe(apiKey => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Api Key created successfully' });
            this.router.navigate(['/account/api-keys', apiKey._id]);
        });
    }
}