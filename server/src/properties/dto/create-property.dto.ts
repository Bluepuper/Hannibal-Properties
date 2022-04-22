export class CreatePropertyDto {

    readonly name: string
    readonly description: string
    readonly type: string
    readonly price: number
    readonly region: string
    readonly bedrooms: number
    readonly bathrooms: number
    readonly surface: number
    readonly links: string[]

}