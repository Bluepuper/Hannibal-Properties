

export default async function handler(req: any, res: any) {
    console.log(req.body);
    
    const response = await fetch(`http://localhost:5000/properties/${req.body.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            price: Number(req.body.price),
            region: req.body.region,
            bedrooms: Number(req.body.bedrooms),
            bathrooms: Number(req.body.bathrooms),
            surface: Number(req.body.surface)
        }),
        headers: {'Content-Type': 'application/json'}
    })
    console.log("API FROM CONTAINER")
    const response1 = await response.json()
    res.status(200).json(response1)

}