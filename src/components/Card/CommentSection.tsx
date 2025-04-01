import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, IconButton } from '@mui/material';
import { type CommentPreview } from '../../types/type_postUser.d';
import InteractionIcons from '../Buttons/IconPopoverBtn';
import CreateIcon from '@mui/icons-material/Create';

interface CommentSectionProps {
	comments: CommentPreview[];
	currentUser?: string; // user_id del usuario actual
}

export const CommentSection = ({ comments }: CommentSectionProps) => {
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
								<CreateIcon />
							</IconButton>
							<InteractionIcons interactions={comment.interactions || {}} />
						</ListItem>
						<Divider
							variant='inset'
							component='li'
						/>
					</div>
				))}
			</List>
		</div>
	);
};
