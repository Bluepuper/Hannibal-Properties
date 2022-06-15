import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript"
import { Link } from './links.model'
import { Question } from "./questions.model"

interface PropertyCreationAttrs {
    name: string
    description: string
    type: string
    price: number
    region: string
    bedrooms: number
    bathrooms: number
    surface: number

}

@Table({ tableName: "properties"})
export class Property extends Model<Property, PropertyCreationAttrs> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    
    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @Column({ type: DataType.STRING(3000), allowNull: false})
    description: string

    @Column({ type: DataType.STRING, allowNull: false})
    type: string

    @Column({ type: DataType.INTEGER, allowNull: false})
    price: number

    @Column({ type: DataType.STRING, allowNull: false})
    region: string

    @Column({ type: DataType.INTEGER, allowNull: false})
    bedrooms: number

    @Column({ type: DataType.INTEGER, allowNull: false})
    bathrooms: number

    @Column({ type: DataType.INTEGER, allowNull: false})
    surface: number
    
    @HasMany(() => Link)
    images: Link[]

    @HasMany(() => Question)
    questions: Question[]

}