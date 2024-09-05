import { Component, OnInit } from "@angular/core";
import { ApiKeyService } from "../../../services/api-key.service";
import { ApiKey } from "../../../model/api-key";

@Component({
    selector: "api-keys-list",
    templateUrl: "./api-keys-list.component.html",
})
export class ApiKeysListComponent implements OnInit {
    apiKeys: ApiKey[] = [];
    loading = true;

    constructor(
        private readonly apiKeyService: ApiKeyService,
    ) {
    }

    ngOnInit(): void {
        this.apiKeyService.getApiKeys().subscribe(apiKeys => {
            this.apiKeys = apiKeys;
            this.loading = false;
        });
    }
}
