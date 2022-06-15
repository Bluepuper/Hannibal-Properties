export default async function handler(req: any, res: any) {
    console.log(req.body)
    const response = await fetch('http://localhost:5000/properties/message/', {
        method: 'POST',
        body: JSON.stringify({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            message: req.body.message,
            propertyId: req.body.propertyId
        }),
        headers: {'Content-Type': 'application/json'}
    })
    const isCreated = await response.json()
    console.log(isCreated)
    
    res.status(200).json(isCreated)

}