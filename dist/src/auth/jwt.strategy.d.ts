import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<{
        id: number;
        email: string;
        password: string;
        username: string;
        fullName: string;
        phoneNumber: string | null;
        dateOfBirth: Date | null;
        gender: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
