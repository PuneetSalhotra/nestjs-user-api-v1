import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentSchema } from './student/student.schema';
import { StudentService } from './student/student.service';

import { PostSchema } from './post/post.schema';
import { PostService } from './post/post.service';
import { PostController } from './post/post.controller';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { CommentSchema } from './comment/comment.schema';
@Module({
  imports:[MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }, { name: 'Post', schema: PostSchema }, { name: 'Comment', schema: CommentSchema }])],
  controllers: [AppController,StudentController, PostController, CommentController],
  providers: [AppService, StudentService, PostService, CommentService],
})
export class AppModule {}