import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString, IsArray, IsBoolean, IsDate } from 'class-validator';

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
  @IsString()
  cityIDs: string[];
}

export class NeighborhoodPaginatorDto extends PartialType(PaginatorDto) {
  @IsBoolean()
  active: boolean;
  @IsString()
  name: string;
  @IsString()
  id: string;
  @IsString()
  cityID: string;
  @IsDate()
  from: Date;
  @IsDate()
  to: Date;
}
