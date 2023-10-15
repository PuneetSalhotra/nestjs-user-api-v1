import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor} from './common/response/response.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe);
  app.useGlobalInterceptors(new ResponseInterceptor())

  await app.listen(3000);
}
bootstrap();
