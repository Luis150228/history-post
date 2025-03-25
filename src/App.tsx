import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Card, CardContent } from '@mui/material';

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
			<main className='app-publications'>
				<section className='section-publication'>
					<Card>
						<CardContent className='card-content-post'>
							<div className='what-do-you-thing'>
								<form>
									<img
										src='https://github.com/Luis150228.png'
										alt='Avatar'
									/>
									<input
										type='text'
										placeholder='What do you think?'
									/>
								</form>
							</div>
							<div className='actions'>
								<Button variant='contained'>Video</Button>
								<Button variant='contained'>Imagen</Button>
								<Button variant='contained'>Sentimiento</Button>
							</div>
						</CardContent>
					</Card>
				</section>
				<section className='section-posts'>
					<Card>
						<CardContent className='card-content-posts'>
							<div className='what-do-you-thing'></div>
							<h2>Publicaciones</h2>
						</CardContent>
					</Card>
				</section>
			</main>
		</ThemeProvider>
	);
}

export default App;
