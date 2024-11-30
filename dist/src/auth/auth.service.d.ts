import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
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
    login(loginDto: any): Promise<{
        access_token: string;
        message: string;
    }>;
}
