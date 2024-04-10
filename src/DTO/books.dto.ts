import { IsNotEmpty, IsString, MinLength, MaxLength, isString, IsNumber, IsPositive, ArrayMinSize, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer'
import { AuthorDTO } from './author.dto';

export class BookDTO {
    
    //Não pode ser vazio
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string;

    @IsNotEmpty()
    @Type(() => AuthorDTO)
    @ArrayMinSize(1)
    @ValidateNested()
    readonly author: AuthorDTO[];

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly language: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly releaseYear: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly publisher: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly pages: number;
}


