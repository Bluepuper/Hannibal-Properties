import { Body, Controller, Delete, Get, Param, Post, Put, Req, Session, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreatePropertyDto } from './dto/create-property.dto';
import { PropertiesService } from './properties.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Response, Request } from 'express';

@Controller('properties')
export class PropertiesController {

    constructor(private propertiesService: PropertiesService) {}

    // @UseGuards(JwtAuthGuard)
    @Get()
    getAll(
        @Req() request
    ) {
        console.log(request.user)
        return this.propertiesService.getAllProperties()
    }

    @Get(':id')
    getOne(@Param('id') id: number)  {
        return this.propertiesService.getPropertyById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    //@UseInterceptors(FilesInterceptor('files'))
    async createProperty(
        //@UploadedFiles() files: Array<Express.Multer.File>,
        @Body() dto: CreatePropertyDto,
        @Req() request: Request
    ) {
        const isCreated = await this.propertiesService.createProperty(dto)
        return isCreated
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    //@UseInterceptors(FilesInterceptor('files'))
    async editProperty(
        //@UploadedFiles() files: Array<Express.Multer.File>,
        @Body() dto,
        @Param('id') id: number
    ) {
        const property = await this.propertiesService.editProperty(id, dto)
        return property
        return true
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteProperty(@Param('id') id: number) {
        return this.propertiesService.deleteProperty(id)
    }

    @Post('/message')
    addMessage(
        @Body() dto: CreateQuestionDto
    ) {
        return this.propertiesService.createMessage( dto )
        //return {firstName, lastName, isCreated: true}
    }

    @Get('/questions/get')
    getAllQuestions() {
        return this.propertiesService.getAllQuestions()
        //return {firstName, lastName, isCreated: true}
    }
}
