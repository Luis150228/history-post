import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#2f3742', // Color de fondo principal
			paper: '#364357', // Color para componentes como Cards, Dialogs
		},
	},
});

export function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<main>PortHistory App RangelDev</main>
			<Button
				variant='contained'
				color='primary'>
				Hello World
			</Button>
		</ThemeProvider>
	);
}

export default App;
