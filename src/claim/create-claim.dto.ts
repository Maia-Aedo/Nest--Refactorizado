import { Type } from 'class-transformer';
import { IsOptional,IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateClaimDto {
  @IsNumber()
  id_visible: number;
  @IsString()
  uploadUserID: string;
  @IsString()
  direction: string;
  @IsString()
  clientLastName: string;
  @IsString()
  clientName: string;
  @IsString()
  clientCount: string;
  @IsString()
  phone: string;
  @IsString()
  description: string;
  @IsString()
  claimTypeID: string;
  @IsString()
  neighborhoodID: string;
  @IsString()
  workerID: string;
  @IsString()
  tasks: string;
  @IsOptional()
  newWorkWith: any;
  @IsString()
  id: string;
  @IsDate()
  closeAt: Date;
  @IsDate()
  updatedAt: Date;
  @IsDate()
  deletedAt: Date;
  @IsBoolean()
  deleted: boolean;
  @IsBoolean()
  active: boolean;
  @IsDate()
  createdAt: Date;
}
