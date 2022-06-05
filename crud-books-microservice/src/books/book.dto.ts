

import {
    IsInt,
    IsString,
    IsNotEmpty
  } from 'class-validator';
  import { PartialType } from '@nestjs/mapped-types';
export class BookDTO {
    @IsNotEmpty({
        message:'name is required'
    })
    @IsString({
        message:'name must be a string'
    })
    name: string;

    @IsNotEmpty({
        message:'description is required'
    })
    @IsString({
        message:'description must be a string'
    })
    description: string;
    @IsNotEmpty({
        message:'author is required'
    })
    @IsString({
        message:'author must be a string'
    })
    author: string;
    @IsNotEmpty({
        message:'userId is required'
    })
    @IsInt({
        message:'userId must be a number'
    })
    userId: number;
}

export class CreateBookDTO extends BookDTO {}

export class BookInDB extends BookDTO {
    id:number;
    createdAt:string;
}

export class UpdateBookDTO extends PartialType(BookDTO){
 
}

