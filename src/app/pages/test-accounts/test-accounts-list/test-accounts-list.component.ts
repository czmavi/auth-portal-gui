import { Component, OnInit } from "@angular/core";
import { TestAccount } from "../../../model/test-account";
import { TestAccountService } from "../../../services/test-account.service";

@Component({
    selector: "test-accounts-list",
    templateUrl: "./test-accounts-list.component.html",
})
export class TestAccountsListComponent implements OnInit {
    testAccounts: TestAccount[] = [];
    loading = true;

    constructor(
        private readonly testAccountService: TestAccountService,
    ) {
    }

    ngOnInit(): void {
        this.testAccountService.getTestAccounts().subscribe(testAccounts => {
            this.testAccounts = testAccounts;
            this.loading = false;
        });
    }
}
