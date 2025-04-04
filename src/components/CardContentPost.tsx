import { Card, CardContent, Divider, IconButton } from '@mui/material';
import { AddReactionIcon, CameraIcon, EmergencyRecordingIcon } from '../utils/icons';

export const CardContentPost = () => {
	return (
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
					<IconButton
						aria-label='Live-Stream'
						size='large'
						color='primary'>
						<EmergencyRecordingIcon />
					</IconButton>
					<IconButton
						aria-label='upload-multimedia'
						size='large'
						color='iconPicture'>
						<CameraIcon />
					</IconButton>
					<IconButton
						aria-label='what-you-feel'
						size='large'
						color='iconEmoji'>
						<AddReactionIcon />
					</IconButton>
				</div>
			</CardContent>
		</Card>
	);
};
