export interface User {
    _id: String;
    name: String;
    email: String;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}