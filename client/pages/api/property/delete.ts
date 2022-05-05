export default async function handler(req: any, res: any) {
    const {id} = req.body
    const response = await fetch(`http://localhost:5000/properties/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({id}),
        headers: {'Content-Type': 'application/json'}
    })
    console.log("DELETE LOG 1: ",response)
    const response1 = await response.json()
    console.log("DELETE LOG 2: ",response1)
    res.status(200).json(response1)
}