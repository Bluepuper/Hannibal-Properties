import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function start() {

  const PORT = process.env.PORT || 5001
  const app = await NestFactory.create(AppModule)

  await app.listen(PORT, () => console.log(`server was started on port ${PORT}`))

}
start();
