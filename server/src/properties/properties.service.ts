import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePropertyDto } from './dto/create-property.dto';
import { Property } from './properteis.model';
import { Link } from './links.model';
import { Question } from './questions.model';
import { CreateQuestionDto } from './dto/create-question.dto';


@Injectable()
export class PropertiesService {

    constructor(
        @InjectModel(Property) private propertyRepository: typeof Property,
        @InjectModel(Link) private linkRepository: typeof Link,
        @InjectModel(Question) private questionRepository: typeof Question
        ) {}

    async createProperty(dto: CreatePropertyDto) {
        
        const property = await this.propertyRepository.create({
            name: dto.name,
            description: dto.description,
            type: dto.type,
            price: dto.price,
            region: dto.region,
            bedrooms: dto.bedrooms,
            bathrooms: dto.bathrooms,
            surface: dto.surface
        })

        let relatedLinks = null
        if (dto.links[0].length > 5) {
            const bulkLinks = []
            dto.links.forEach((link) => {
                bulkLinks.push({link, propertyId: property.id})
            })
            relatedLinks = await this.linkRepository.bulkCreate(bulkLinks)
        }
        return (property ? true : null)
        
    }

    async editProperty(id, dto:any) {
        
        const property = await this.propertyRepository.update({
            name: dto.name,
            description: dto.description,
            type: dto.type,
            price: dto.price,
            region: dto.region,
            bedrooms: dto.bedrooms,
            bathrooms: dto.bathrooms,
            surface: dto.surface
        }, {where: {id: id}})
        return (property ? true : null)
        
    }

    async updateProperty(id, dto: CreatePropertyDto) {
        const updatedProperty = await this.propertyRepository.update({},{ where: id })
    }

    async getAllProperties() {
        const properties = await this.propertyRepository.findAll({ include: [Link] })
        return properties
    }

    async getPropertyById(id: number) {
        const property = await this.propertyRepository.findOne({where: {id}, include: {all: true}})
        return property
    }

    async deleteProperty(id: number) {
        return await this.propertyRepository.destroy({where: {id}})
    }

    /**
     * Create links to exact estate using `bulkCreate`
     * @param propertyId 
     * @param links 
     * @returns Array of created links
     */
    async addLinksToProperty(propertyId: number, links: string[]) {
        const bulkLinks = []
        links.forEach((link) => {
            bulkLinks.push({link, propertyId})
        })
        console.log(bulkLinks)
        return await this.linkRepository.bulkCreate(bulkLinks)
    }

    async createMessage(dto: CreateQuestionDto) {
        if (dto.propertyId) {
            const question = await this.questionRepository.create({
            firstName: dto.firstName,
            lastName: dto.lastName,
            phone: dto.phone,
            email: dto.email,
            message: dto.message,
            propertyId: Number(dto.propertyId)
            })
            return question
        } else {
            const question = await this.questionRepository.create({
                firstName: dto.firstName,
                lastName: dto.lastName,
                phone: dto.phone,
                email: dto.email,
                message: dto.message,
                })
            return question
        }
        
    }

    async getAllQuestions() {
        const questions = await this.questionRepository.findAll()
        return questions
    }

}
