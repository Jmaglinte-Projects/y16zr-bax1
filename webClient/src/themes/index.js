import { extendTheme } from '@mui/joy/styles';
import { pink } from '@mui/material/colors';

export const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: pink,
				secondary: pink
			},
		},
	},
});
  
export default theme;