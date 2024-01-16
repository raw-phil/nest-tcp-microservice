import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const port = 1234;
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port,
    },
  });
  await app.listen();
  console.log('Microservice listening on port:', port);
}
bootstrap();