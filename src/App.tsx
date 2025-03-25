import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './themes';
import { CardContentPost } from './components/CardContentPost';
import { CardContentPosts } from './components/CardContentPosts';

export function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<main className='app-publications'>
				<section className='section-publication'>
					<CardContentPost/>
				</section>
				<section className='section-posts'>
					<CardContentPosts/>
				</section>
			</main>
		</ThemeProvider>
	);
}

export default App;
