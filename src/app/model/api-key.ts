export interface ApiKey {
    _id: string;
    secret: string;
    description: string;
    organisationId: string;
    createdBy: string;
    lastUsedDate: Date;
}