import MainLayout from "../../layouts/MainLayout"

export default function Property({estate}:any) {

    // const router = useRouter()
    // const { id } = router.query

    return(
        <MainLayout>
            <div>
                <h2>EXACT HOUSE</h2>
                <p>name: {estate.name}</p>
                <p>desc: {estate.description}</p>
                <p>type: {estate.type}</p>
                <p>price: {estate.price}</p>
                <p>region: {estate.region}</p>
                <p>begrooms: {estate.begrooms}</p>
                <p>bathrooms: {estate.bathrooms}</p>
                <p>surface: {estate.surface}</p>
                {estate.images.length ?
                    estate.images.map((image: any) => {
                        return(
                            <div><img src={image.link} width="500px"/></div>
                        )
                    })
                    :
                    null
                }
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({params}: any) {

    const res = await fetch(`http://localhost:5000/properties/${params.id}`)
    const estate = await res.json()
    return { props: { estate }}

}