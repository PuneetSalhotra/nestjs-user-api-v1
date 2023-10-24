import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Comment {

    @Prop()
    title : string;

    @Prop()
    description : string;

    @Prop()
    post_id : string;
    
    @Prop()
    user_id : number;
    

}


export const CommentSchema = SchemaFactory.createForClass(Comment);