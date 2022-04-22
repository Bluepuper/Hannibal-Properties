import fs from "fs"
export const config = {
    api: {
        bodyParser: false
    }
}

export default async (req: FormData, res: any) => {
    const id = Math.random().toString()
    fs.mkdir(`./public/${id}`, {recursive: true}, function (err: any) {
        throw err
    })
}