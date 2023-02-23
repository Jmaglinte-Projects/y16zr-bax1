import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from 'Root/App'

// style + asset
import './index.css'
import config from 'Root/config';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<BrowserRouter basename={config.basename}>
			<App /> 
		</BrowserRouter>
  </React.StrictMode>,
)
