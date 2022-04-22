import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CreatePropertyDto } from './dto/create-property.dto';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {

    constructor(private propertiesService: PropertiesService) {}

    @Get()
    getAll() {
        return this.propertiesService.getAllProperties()
    }

    @Get(':id')
    getOne(@Param('id') id: number)  {
        return this.propertiesService.getPropertyById(id)
    }

    @Post()
    //@UseInterceptors(FilesInterceptor('files'))
    createProperty(
        //@UploadedFiles() files: Array<Express.Multer.File>,
        @Body() dto: CreatePropertyDto
    ) {
        console.log(dto)
        return this.propertiesService.createProperty(dto)
    }

    @Delete('/:id')
    deleteProperty(@Param('id') id: number) {
        return this.propertiesService.deleteProperty(id)
    }

    @Post('/links')
    addLinksToProperty(
        @Body() { propertyId, links }
    ) {
        return this.propertiesService.addLinksToProperty(propertyId, links)
    }

}
