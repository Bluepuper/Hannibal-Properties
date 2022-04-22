import { Column, DataType, Model, Table, BelongsTo, ForeignKey} from "sequelize-typescript"
import { Property } from "./properteis.model"

@Table({ tableName: "links", createdAt: false, updatedAt:false})
export class Link extends Model<Link> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    
    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    link: string
    
    @ForeignKey(() => Property)
    propertyId: number
    
    @BelongsTo(() => Property)
    property: Property
}