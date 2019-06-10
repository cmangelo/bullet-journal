import { User } from '../../shared/models/user.interface';

export interface UserToken {
    user: User;
    token: string;
}