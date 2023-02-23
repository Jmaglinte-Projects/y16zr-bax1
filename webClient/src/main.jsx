import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import App from '@/App'

// style + asset
import './index.css'
import config from '@/config';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<BrowserRouter basename={config.basename}>
			<CssVarsProvider>
				<CssBaseline />
				<App />
			</CssVarsProvider>
		</BrowserRouter>
  </React.StrictMode>,
)
