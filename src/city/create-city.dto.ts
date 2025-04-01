import { IsString, IsNumber, IsBoolean, IsDate } from 'class-validator';

export class CreateCityDto {
  @IsString()
  uploadUserID: string;
  @IsString()
  name: string;
  @IsNumber()
  id_visible: number;
  @IsString()
  id: string;
  @IsDate()
  createdAt: Date;
  @IsDate()
  updatedAt: Date;
  @IsDate()
  deletedAt: Date;
  @IsBoolean()
  deleted: boolean;
  @IsBoolean()
  active: boolean;
}
