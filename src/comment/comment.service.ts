import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createCommentDto } from './create-comment.dto';
import { Model } from 'mongoose';
import { IComment } from './comment.interface';

@Injectable()
export class CommentService {
    constructor(@InjectModel("Comment") private commentModel : Model<IComment>) {}


    async createComment(createCommentDto : createCommentDto) : Promise<IComment> {

        console.log("Data", createCommentDto)
        const comment = new this.commentModel(createCommentDto);

        return await comment.save();
    }
}
