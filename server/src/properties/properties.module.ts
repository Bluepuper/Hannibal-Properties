import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Link } from './links.model';
import { Property } from './properteis.model'
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

@Module({
	controllers: [PropertiesController],
	providers: [PropertiesService],
	imports: [
		SequelizeModule.forFeature([Property, Link])
	],
	exports: []
})
export class PropertiesModule {}