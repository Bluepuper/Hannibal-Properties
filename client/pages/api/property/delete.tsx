export default async function handler(req: any, res: any) {
    const {id} = req.body
    const response = await fetch(`http://localhost:5000/properties/delete/${id}`, {
        method: 'POST',
        body: JSON.stringify({id}),
        headers: {'Content-Type': 'application/json'}
    })
    res.redirect('/dashboard/properties')
}