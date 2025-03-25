import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Card, CardContent, Divider, IconButton } from '@mui/material';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import CameraIcon from '@mui/icons-material/Camera';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { darkTheme } from './themes';

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
							<Divider />
							<div className='btns-actions'>
								<IconButton aria-label='Live-Stream' size='large' color='iconVideo'>	
									<EmergencyRecordingIcon/>
								</IconButton>
								<IconButton aria-label='upload-multimedia' size='large' color='iconPicture'>	
									<CameraIcon/>
								</IconButton>
								<IconButton aria-label='what-you-feel' size='large' color='iconEmoji'>	
									<AddReactionIcon/>
								</IconButton>
							</div>
						</CardContent>
					</Card>
				</section>
				<section className='section-posts'>
					<Card>
						<CardContent className='card-content-posts'>
							<div className='follow-posts'></div>
							<h2>Publicaciones</h2>
						</CardContent>
					</Card>
				</section>
			</main>
		</ThemeProvider>
	);
}

export default App;
