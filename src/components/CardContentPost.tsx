import { useState, useRef } from 'react';
import { Card, CardContent, Divider, IconButton, Tooltip } from '@mui/material';
import { AddReactionIcon, CameraIcon, EmergencyRecordingIcon } from '../utils/icons';

export const CardContentPost = () => {
	const [mediaFiles, setMediaFiles] = useState<Array<{ type: 'image' | 'video'; url: string }>>([]);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const videoInputRef = useRef<HTMLInputElement>(null);

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const reader = new FileReader();

			reader.onload = (event) => {
				if (event.target && event.target.result) {
					setMediaFiles((prev) => [
						...prev,
						{
							type: 'image',
							url: event.target?.result as string,
						},
					]);
				}
			};

			reader.readAsDataURL(file);
		}
	};

	const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const videoURL = URL.createObjectURL(file);
			setMediaFiles((prev) => [
				...prev,
				{
					type: 'video',
					url: videoURL,
				},
			]);
		}
	};

	return (
		<Card sx={{ maxWidth: '100%' }}>
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

				{/* Vista previa de medios */}
				{mediaFiles.length > 0 && (
					<div style={{ margin: '16px 0', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
						{mediaFiles.map((file, index) =>
							file.type === 'image' ? (
								<img
									key={index}
									src={file.url}
									alt='Preview'
									style={{ maxHeight: 100, borderRadius: 4 }}
								/>
							) : (
								<video
									key={index}
									src={file.url}
									style={{ maxHeight: 100, borderRadius: 4 }}
									controls
								/>
							)
						)}
					</div>
				)}

				<Divider sx={{ my: 2 }} />

				<div className='btns-actions'>
					{/* Input oculto para videos */}
					<input
						type='file'
						ref={videoInputRef}
						onChange={handleVideoUpload}
						accept='video/*'
						style={{ display: 'none' }}
					/>

					{/* Input oculto para imágenes */}
					<input
						type='file'
						ref={fileInputRef}
						onChange={handleImageUpload}
						accept='image/*'
						style={{ display: 'none' }}
					/>

					<Tooltip title='Añadir video'>
						<IconButton
							aria-label='Live-Stream'
							size='large'
							color='primary'
							onClick={() => videoInputRef.current?.click()}>
							<EmergencyRecordingIcon />
						</IconButton>
					</Tooltip>

					<Tooltip title='Añadir fotos'>
						<IconButton
							aria-label='upload-multimedia'
							size='large'
							color='secondary'
							onClick={() => fileInputRef.current?.click()}>
							<CameraIcon />
						</IconButton>
					</Tooltip>

					<Tooltip title='Añadir emoji'>
						<IconButton
							aria-label='what-you-feel'
							size='large'
							color='warning'>
							<AddReactionIcon />
						</IconButton>
					</Tooltip>
				</div>
			</CardContent>
		</Card>
	);
};
