
import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CommentService } from './comment.service';
import { createCommentDto } from './create-comment.dto';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService : CommentService) {}

    @Post()
    async addComment(@Res() response, @Body()createCommentDto : createCommentDto) {

        try {
            console.log("Data", createCommentDto);
            const result = this.commentService.createComment(createCommentDto)

            return response.status(HttpStatus.CREATED).json({
                message: 'Comment has been created successfully',
                result
                });
        } catch(e) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Comment has not been created'
                });
        }
    }
}
