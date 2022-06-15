import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import { useState , useCallback} from 'react'
import Dashboard from '../../../layouts/DashboardLayout'
// import {useDropzone} from 'react-dropzone'

const CreatePropertyPage: NextPage = () => {
    
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [type, setType] = useState('')
	const [price, setPrice] = useState('')
	const [region, setRegion] = useState('')
	const [bedrooms, setBedrooms] = useState('')
	const [bathrooms, setBathrooms] = useState('')
	const [surface, setSurface] = useState('')
	const [links,setLinks] = useState('')
	const [isCreated, setIsCreated] = useState('')
	const router = useRouter()


	// const onDrop = useCallback((acceptedFiles: File[]) => {
	// 	acceptedFiles.forEach((file: File, index: number) => {
			
	// 		setImagesUrl((prevState) => [...prevState , `${URL.createObjectURL(file)}`])
	// 		const reader = new FileReader()
		
	// 		reader.onabort = () => console.log('file reading was aborted')
	// 		reader.onerror = () => console.log('file reading has failed')
	// 		reader.onprogress = (e) => updateProgress(e, index)
	// 		reader.onload = (e) => {
	// 		// Do whatever you want with the file contents
	// 			const base64Str = reader.result
	// 			setImages((prevState) => [...prevState , `${base64Str}`])
	// 			//setImages([...images, `${base64Str}`])
	// 		}
	// 		reader.readAsDataURL(file)
	// 	})
		
	// }, [])
	  
	// const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

	const addEstate = async () => {
		const linksToSend = links.split(/[\n\s]/)
		
		await fetch('http://localhost:5000/properties/', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({
				name: name,
				description: description,
				type: type,
				price: Number(price),
				region: region,
				bedrooms: Number(bedrooms),
				bathrooms: Number(bathrooms),
				surface: Number(surface),
				links: linksToSend
			}),
			headers: {'Content-Type': 'application/json'}
		})
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(console.log)
	}

	// function updateProgress(evt:any, index:number) {
	// 	if (evt.lengthComputable) {
	// 	  // evt.loaded and evt.total are ProgressEvent properties
	// 	  var loaded = (evt.loaded / evt.total);
	// 	  console.log(index, " load progress: ", loaded.toFixed(2))
	// 	}
	//   }
	const types = ["Choose type", "Apartament", "Detached house", "Villa", "Farm"]
	const regions = ["Choose region","Abruzzo", "Aosta Valley", "Apulia", "Basilicata", "Calabria", "Campania",
				"Emilia-Romagna", "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardy", "Marche",
				"Molise", "Piedmont", "Sardinia", "Sicily", "Trentino-South Tyrol", "Tuscany",
				"Umbria", "Veneto"]
	return (
		<Dashboard>
			{isCreated ? <div>{isCreated}</div> : null}
			<p>
				<input
				type='text'
				placeholder='name'
				value={name}
				onChange={(e) => setName(e.target.value)}
				/>
			</p>
			<p>
				<select onChange={(e) => setType(e.target.value)}>
					{types.map((item, index) => {
					return (
						index ? <option value={item}>{item}</option>: <option value="">{item}</option>
					)})}
				</select>
			</p>
			<p>
				<select onChange={(e) => setRegion(e.target.value)}>
					{regions.map((item, index) => { return (
						index ? <option value={item}>{item}</option>: <option value="">{item}</option>
					)})}
				</select>
			</p>
			<p>
				<input
					type='text'
					placeholder='price in euros'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
			</p>
			<p>
				<input
					type='text'
					placeholder='bedrooms'
					value={bedrooms}
					onChange={(e) => setBedrooms(e.target.value)}
				/>
			</p>
			<p>
			<input
				type='text'
				placeholder='bathrooms'
				value={bathrooms}
				onChange={(e) => setBathrooms(e.target.value)}
			/>
			</p>
			<p>
				<input
					type='text'
					placeholder='surface'
					value={surface}
					onChange={(e) => setSurface(e.target.value)}
				/>
			</p>
			<p>
				<textarea
				 	cols={30}
					rows={10}
					placeholder='description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</p>
			<p>
				<textarea
				 	cols={30}
					rows={10}
					placeholder='links'
					value={links}
					onChange={(e) => setLinks(e.target.value)}
				/>
			</p>
			
			<button onClick={addEstate}>Add Estate</button>
			
			

		</Dashboard>
	)
}

export default CreatePropertyPage