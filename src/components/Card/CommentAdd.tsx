import { Send } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

export const CommentAdd = () => {
	const [newComment, setNewComment] = useState('');
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (newComment.trim()) {
			// Aquí manejarías el envío del comentario
			console.log('Comentario enviado:', newComment);
			setNewComment('');
		}
	};

	return (
		<div className='comment-section'>
			<form
				onSubmit={handleSubmit}
				style={{ marginTop: '16px' }}>
				<TextField
					fullWidth
					variant='outlined'
					size='small'
					placeholder='Escribe un comentario...'
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										type='submit'
										color='primary'
										disabled={!newComment.trim()}
										edge='end'>
										<Send />
									</IconButton>
								</InputAdornment>
							),
						},
					}}
				/>
			</form>
		</div>
	);
};
