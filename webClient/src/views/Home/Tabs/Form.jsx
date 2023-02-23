import React, { useState } from 'react'
import * as XLSX from 'xlsx';
import FileBase64 from 'react-file-base64';
import axios from 'axios';

// project imports
import FileInput from '../../../components/FileInput';

function Form() {

	const [formData, setFormData] = useState({
		excelData: null,
		poster: null
	});

	const handleSubmit = async () => {
		await axios.post(`http://localhost:5050/part/import`, { ...formData })
		.then(res => {
			console.log(res.data);
		})
	}

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		
		const promise = new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsArrayBuffer(file);

			fileReader.onload = (e) => {
				const bufferArray = e.target.result;
				const wb=XLSX.read(bufferArray, {type: 'buffer'});
				const wsname=wb.SheetNames[0];
				const ws=wb.Sheets[wsname];

				const data=XLSX.utils.sheet_to_json(ws);
				resolve(data);
			}

			fileReader.onerror=((error) => {
				reject(error)
			}) 
		})

		promise.then((d) => setFormData({...formData, excelData: d }));

	}
 

	return (
		<>
			<div className="card ">
				<h2>IMPORT PARTS CATALOGUE</h2>
				
				<div className='appForm'>
					<div className='field'>
						<label htmlFor="excelFile">Excel File</label>
						{<FileInput onChange={handleFileChange} name="excelFile" id="excelFile" />}
					</div>
					<div className='field'>
						<label htmlFor="subCategoryPoster">Sub Category Banner</label>
						{<FileBase64 name="subCategoryPoster" onDone={(e) => setFormData({...formData, poster: e.base64})} />}
					</div>
					<button onClick={handleSubmit} disabled >UPLOAD</button>
				</div>
			</div>
		</>
	)
}

export default Form