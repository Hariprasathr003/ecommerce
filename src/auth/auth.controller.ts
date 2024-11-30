import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/user/dto/login.dto';

@Controller('auth') // This decorator defines the route prefix for the controller
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') 
  async login(@Body() loginDto: LoginDto) {
    // Here, the loginDto should contain the email and password
    const result = await this.authService.login(loginDto);
    if (result) {
      return { message: 'Login successful', access_token: result.access_token }; // Returning success message and token
    }
    return { message: 'Invalid credentials' };
  }

}
