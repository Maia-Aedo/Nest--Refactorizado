import { IsString, IsArray, IsBoolean, IsNumber, IsDate } from 'class-validator';

export class CreateNeighborhoodDto {
  @IsNumber()
  id_visible: number;
  @IsString()
  uploadUserID: string;
  @IsString()
  name: string;
  @IsString()
  zoneID: string;
  @IsString()
  cityID: string;
  @IsArray()
  coordinates: string[];
  @IsDate()
  updatedAt: Date;
  @IsDate()
  deletedAt: Date;
  @IsBoolean()
  deleted: boolean;
  @IsBoolean()
  active: boolean;
}
