import { Column, DataType, Model, Table, BelongsTo, ForeignKey, AllowNull} from "sequelize-typescript"
import { Property } from "./properteis.model"

@Table({ tableName: "questions", updatedAt:false})
export class Question extends Model<Question> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    
    @Column({ type: DataType.STRING, allowNull: false})
    firstName: string

    @Column({ type: DataType.STRING, allowNull: false})
    lastName: string

    @Column({ type: DataType.STRING, allowNull: false})
    phone: string

    @Column({ type: DataType.STRING, allowNull: false})
    email: string

    @Column({ type: DataType.STRING(500), allowNull: false})
    message: string
    
    @ForeignKey(() => Property)
    @Column({allowNull: true})
    propertyId: number
    
    @BelongsTo(() => Property)
    property: Property
}