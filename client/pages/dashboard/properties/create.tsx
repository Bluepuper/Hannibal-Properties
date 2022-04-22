import type { NextPage } from 'next'
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
		const res = await fetch('../../api/property/create', {
			method: 'POST',
			body: JSON.stringify({name, description, type, price, region, bedrooms, bathrooms, surface, linksToSend}),
			headers: {'Content-Type': 'application/json'}
		})
		const response = await res.json()
		console.log("created")
	}


	// function updateProgress(evt:any, index:number) {
	// 	if (evt.lengthComputable) {
	// 	  // evt.loaded and evt.total are ProgressEvent properties
	// 	  var loaded = (evt.loaded / evt.total);
	// 	  console.log(index, " load progress: ", loaded.toFixed(2))
	// 	}
	//   }

	return (
		<Dashboard>
			<p>
				<input
				type='text'
				placeholder='name'
				value={name}
				onChange={(e) => setName(e.target.value)}
				/>
			</p>
			<p>
				<input
					type='text'
					placeholder='description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</p>
			<p>
				<input
					type='text'
					placeholder='type'
					value={type}
					onChange={(e) => setType(e.target.value)}
				/>
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
					placeholder='region'
					value={region}
					onChange={(e) => setRegion(e.target.value)}
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
					placeholder='surface'
					value={links}
					onChange={(e) => setLinks(e.target.value)}
				/>
			</p>
			
			<button onClick={addEstate}>Add Estate</button>
			
			

		</Dashboard>
	)
}

export default CreatePropertyPage

// {/* <div {...getRootProps()}>
// 				<input {...getInputProps()} />
// 				{
// 					isDragActive ?
// 					<div style={{height: "50px", border: "solid 1px grey"}}>Drop the files here ...</div>:
// 					<div style={{height: "50px", border: "solid 1px grey"}}>Drag 'n' drop some files here, or click to select files</div>
// 				}
// 			</div> */}
// 			{/* {imagesUrl.map((imageUrl) => { return(
// 				<div key={Math.random()}>
// 					<img height={"200px"} src={imageUrl}/>
// 				</div>
// 			)})}	 */}