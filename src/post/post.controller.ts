import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CreatePostDto } from './create-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private readonly postService : PostService){}

    @Post()
    async createPost(@Res() response, @Body() createPostDto : CreatePostDto ) {
        try {

            const newPost = await this.postService.createPost(createPostDto);
            return response.status(HttpStatus.CREATED).json({
            message: 'Post has been created successfully',
            newPost
            });
        } catch(e) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Failed',
                });
        }
    }
}
