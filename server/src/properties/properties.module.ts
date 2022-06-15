import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Link } from './links.model';
import { Property } from './properteis.model'
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { Question } from './questions.model';

@Module({
	controllers: [PropertiesController],
	providers: [PropertiesService],
	imports: [
		SequelizeModule.forFeature([Property, Link, Question]),
		AuthModule
	],
	exports: []
})
export class PropertiesModule {}