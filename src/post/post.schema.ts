import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()

export class Post {

   
    @Prop()
    title : string;

    @Prop()
    description : string;

    @Prop()
    user_id : string;

}

export const PostSchema = SchemaFactory.createForClass(Post);