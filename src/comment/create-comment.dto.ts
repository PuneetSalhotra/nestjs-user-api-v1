import {IsNotEmpty, IsNumber, IsString, Max, MaxLength} from 'class-validator'

export class createCommentDto {

    @IsNumber()
    @IsNotEmpty()
    readonly user_id : number;
    
    @IsNumber()
    @IsNotEmpty()
    readonly post_id : number;
    
    @IsString()
    @IsNotEmpty()
    readonly title : string;

}