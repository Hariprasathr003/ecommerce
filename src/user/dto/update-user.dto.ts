import { IsString, IsEmail, IsOptional, IsISO8601 } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  fullName: string;  

  @IsString()
  username: string;  

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;  

  @IsOptional()
  @IsISO8601()
  dateOfBirth: string;  

  @IsOptional()
  @IsString()
  gender?: string; 
}