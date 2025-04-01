import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsArray, IsBoolean, IsDate, IsNumber } from 'class-validator';

export class PaginatorDto {
  @IsNumber()
  page: number;
  @IsNumber()
  perPage: number;
  @IsString()
  sortBy: string;
  @IsString()
  sortByProperty: string;
  @IsString()
  cityID: string;
  @IsDate()
  from: Date;
  @IsDate()
  to: Date;
  @IsArray()
  cityIDs: string[];
}

export class ClaimPaginatorDto extends PartialType(PaginatorDto) {
  @IsBoolean()
  relations: boolean;
  @IsBoolean()
  active: boolean;
  @IsString()
  id: string;
  @IsNumber()
  id_visible: number;
  @IsString()
  clientName: string;
  @IsString()
  client_lastName: string;
  @IsString()
  direction: string;
  @IsString()
  neighborhood: string;
  @IsString()
  phone: string;
  @IsString()
  clientCount: string;
  @IsString()
  workerName: string;
  @IsString()
  claimType: string;
  @IsDate()
  createdAt: Date;
}
