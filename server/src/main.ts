import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import * as cookieParser from 'cookie-parser'

async function start() {

	const PORT = process.env.PORT || 5001
	const app = await NestFactory.create(AppModule)
	
	app.use(cookieParser())
	app.enableCors({
		origin: 'http://localhost:3000',
		credentials: true
	})
	await app.listen(PORT, () => console.log(`server was started on port ${PORT}`))

}
start();
