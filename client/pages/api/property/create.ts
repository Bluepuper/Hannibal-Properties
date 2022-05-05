

export default async function handler(req: any, res: any) {
    const response = await fetch('http://localhost:5000/properties/', {
        method: 'POST',
        body: JSON.stringify({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            price: Number(req.body.price),
            region: req.body.region,
            bedrooms: Number(req.body.bedrooms),
            bathrooms: Number(req.body.bathrooms),
            surface: Number(req.body.surface),
            links: req.body.linksToSend
        }),
        headers: {'Content-Type': 'application/json'}
    })
    const isCreated = await response.json()
    res.status(200).json(isCreated)

}