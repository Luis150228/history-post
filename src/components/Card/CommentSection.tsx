import { useState } from 'react';
import {
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Typography,
	Divider,
	TextField,
	IconButton,
	InputAdornment,
} from '@mui/material';
import { Send, MoreVert } from '@mui/icons-material';
import { type CommentPreview } from '../../types/type_postUser.d';

interface CommentSectionProps {
	comments: CommentPreview[];
	currentUser?: string; // user_id del usuario actual
}

export const CommentSection = ({ comments }: CommentSectionProps) => {
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
			<List dense>
				{comments.map((comment) => (
					<div key={comment.comment_id}>
						<ListItem alignItems='flex-start'>
							<ListItemAvatar>
								<Avatar
									alt={comment.user.username}
									src='/default-avatar.png'
								/>
							</ListItemAvatar>
							<ListItemText
								primary={
									<Typography
										component='span'
										fontWeight='bold'>
										{comment.user.username}
									</Typography>
								}
								secondary={
									<>
										<Typography
											component='span'
											variant='body2'
											display='block'
											color='text.primary'>
											{comment.text}
										</Typography>
										<Typography
											component='span'
											variant='caption'
											display='block'
											color='text.secondary'>
											{new Date(comment.created_at).toLocaleString()}
										</Typography>
									</>
								}
							/>
							<IconButton
								edge='end'
								size='small'>
								<MoreVert />
							</IconButton>
						</ListItem>
						<Divider
							variant='inset'
							component='li'
						/>
					</div>
				))}
			</List>

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
