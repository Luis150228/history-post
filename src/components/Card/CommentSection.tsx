import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider } from '@mui/material';
import { type Interactions, CommentPreview } from '../../types/type_postUser.d';
import { ReplayAndButtons } from '../Buttons/ReplayAndButtons';

interface CommentSectionProps {
	comments: CommentPreview[];
	currentUser?: string; // user_id del usuario actual
}

export const CommentSection = ({ comments }: CommentSectionProps) => {
	console.log(comments);
	return (
		<div className='comment-section'>
			<List dense>
				{comments.map((comment) => (
					<div
						key={comment.comment_id}
						data-set={comment.comment_id}>
						<ListItem className='comment-item-li'>
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
						</ListItem>
						<ReplayAndButtons
							interactions={comment.interactions || ({} as Interactions)}
							replays={comment.comments_response ?? []}
						/>
						<Divider component='li' />
					</div>
				))}
			</List>
		</div>
	);
};
