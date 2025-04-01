import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString, IsDate, IsArray } from 'class-validator';

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

export class UserPaginator extends PartialType(PaginatorDto) {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsString()
  username: string;
  @IsString()
  mail: string;
  @IsBoolean()
  delete: boolean;
  @IsBoolean()
  active: boolean;
  @IsBoolean()
  root: boolean;
}
