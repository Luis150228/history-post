import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CardMediaPicture } from './Card/CardMediaPicture';
import { type SocialMediaPost } from '../types/type_postUser.d';
import IconPopoverBtn from './Buttons/IconPopoverBtn';
import { CommentSection } from './Card/CommentSection';
import { CommentAdd } from './Card/CommentAdd';
import { useToggle } from '../hooks/activateCommits';
import { PostActionButtons } from './Buttons/PostActionButtons';

export const CardContentPosts = ({
	posts,
	onDelete,
}: {
	posts: SocialMediaPost;
	onDelete: (postId: string) => void;
}) => {
	const comments = useToggle();
	const Addcomment = useToggle();

	const handleToggleComments = () => {
		// Solo permite toggle si hay comentarios
		if (posts.interactions.comments !== undefined) {
			if (posts.interactions.comments > 0) {
				comments.toggle();
			}
		}
	};
	return (
		<Card className='card-posts'>
			<CardHeader
				avatar={
					<Avatar
						alt={posts.author.username}
						src={posts.author.profile_picture}
					/>
				}
				title={posts.author.username}
				subheader={posts.metadata.created_at}
				action={
					<>
						<IconButton
							aria-label='close'
							onClick={() => onDelete(posts.post_id)}>
							<CloseIcon />
						</IconButton>
					</>
				}
				sx={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between',
					alignItems: 'center',
					'& .MuiCardHeader-content': {
						textAlign: 'left',
					},
				}}
			/>
			<CardContent
				sx={{ padding: '0px 12px 0px 12px' }}
				className='card-content-posts'>
				<div className='follow-posts'>
					<Typography sx={{ maxWidth: '514px', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis' }}>
						{posts.content.text}
					</Typography>
				</div>
			</CardContent>
			<CardMediaPicture images={posts.content.media || []} />
			<CardActions className='post-secction-commits'>
				<div className='post-resume-commits'>
					<div className='post-resume'>
						<IconPopoverBtn interactions={posts.interactions} />
					</div>
					<div className='post-commits'>
						<Typography
							className='interactive-element'
							onClick={handleToggleComments}>
							<span className='commits-data'>{posts.interactions.comments}</span> Commits
						</Typography>
						<Typography className='interactive-element'>
							<span className='share-data'>{posts.interactions.shares}</span> Shared
						</Typography>
					</div>
				</div>
				<PostActionButtons onAddComment={Addcomment.toggle} />
			</CardActions>
			{Addcomment.isVisible && <CommentAdd />}
			{comments.isVisible && <CommentSection comments={posts.comments_preview || []} />}
		</Card>
	);
};

//Me Gusta, Comentar, Enviar, Compartir
