import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsString, IsNumber, IsArray, IsBoolean } from 'class-validator';

export class PaginatorDto {
  @IsNumber()
  page: number;
  @IsNumber()
  perPage: number;
  @IsString
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

export class CityPaginatorDto extends PartialType(PaginatorDto) {
  @IsBoolean()
  relations: boolean;
  @IsBoolean()
  active: boolean;
  @IsString()
  id: string;
}
