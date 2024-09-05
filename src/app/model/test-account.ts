export interface TestAccount {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    description: string;
    organisationId: string;
    createdBy: string;
    lastUsedDate: Date;
    totpSecret: string;
}