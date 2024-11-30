import { AuthService } from './auth.service';
import { LoginDto } from 'src/user/dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        message: string;
        access_token: string;
    } | {
        message: string;
        access_token?: undefined;
    }>;
}
