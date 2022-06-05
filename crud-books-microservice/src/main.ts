import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:process.env.CORS_ORIGIN_URL || "*"
  })
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      }
    }))
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
