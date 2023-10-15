import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './create-post.dto';
import { IPost } from './post.interface';

@Injectable()
export class PostService {

    constructor(@InjectModel('Post') private postModel : Model<IPost>) {}

    async createPost(createPostDto : CreatePostDto) : Promise<IPost> {

        const post = await new this.postModel(createPostDto);

        return post.save();
    }
}
