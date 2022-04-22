import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePropertyDto } from './dto/create-property.dto';
import { Property } from './properteis.model';
import { Link } from './links.model';

@Injectable()
export class PropertiesService {

    constructor(
        @InjectModel(Property) private propertyRepository: typeof Property,
        @InjectModel(Link) private linkRepository: typeof Link
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
        const bulkLinks = []
        dto.links.forEach((link) => {
            bulkLinks.push({link, propertyId: property.id})
        })
        const relatedLinks = await this.linkRepository.bulkCreate(bulkLinks)
        if (property && relatedLinks) {
            return {
                name: dto.name,
                description: dto.description,
                type: dto.type,
                price: dto.price,
                region: dto.region,
                bedrooms: dto.bedrooms,
                bathrooms: dto.bathrooms,
                surface: dto.surface,
                links: dto.links
            }
        } else {
            return "something went wrong"
        }
        
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
        const deletedProperty = await this.propertyRepository.destroy({where: {id}})
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

}
