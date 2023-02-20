import { useState } from 'react'
import * as XLSX from 'xlsx';
import reactLogo from './assets/react.svg'
import './App.css'

import FileInput from './components/FileInput'

function App() {
	const [initialData, setInitialData] = useState(null);

	const handleSubmit = () => {
		console.log(initialData)
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

		promise.then((d) => setInitialData(d));

	}
 
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
				<h2>IMPORT PARTS CATALOGUE</h2>
				<hr/>
        {<FileInput onChange={handleFileChange} />}
				<button onClick={handleSubmit}>UPLOAD</button>
			</div>
    </div>
  )
}

export default App
