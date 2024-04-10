import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AuthorDTO {
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly surname: string;
}