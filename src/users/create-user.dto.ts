import { IsOptional, IsArray, IsBoolean, IsNumber, IsEmail, IsString, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id_visible: number;
  @IsString()
  username: string;
  @IsEmail()
  mail: string;
  @IsString()
  password: string;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsString()
  last_name?: string;
  @IsOptional()
  @IsString()
  id_user?: string;
  @IsArray()
  updateCityID: string[];
  @IsOptional()
  @IsString()
  id?: string;
  @IsOptional()
  @IsBoolean()
  deleted?: boolean = false;
  @IsOptional()
  @IsBoolean()
  active?: boolean = true;
  @IsOptional()
  @IsBoolean()
  otp?: boolean;
  @IsOptional()
  @IsBoolean()
  root?: boolean;
  @IsDate()
  createdDate: Date;
  @IsOptional()
  @IsDate()
  deleteDate?: Date;
  @IsString()
  old_password: string;
  @IsArray()
  deletedCityID: string[];
}
