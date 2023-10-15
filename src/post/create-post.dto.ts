import { IsNotEmpty, IsNumber, IsString, Max, MaxLength } from "class-validator";


export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;
    
    @IsString()
    @IsNotEmpty()
    readonly description: string;
    
    @IsString()
    @IsNotEmpty()
    readonly user_id: string;
    
}
