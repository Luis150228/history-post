import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
	SpeedDial,
	SpeedDialAction,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { CardMediaPicture } from './Card/CardMediaPicture';
import { type SocialMediaPost } from '../types/type_postUser.d';
import IconPopoverBtn from './Buttons/IconPopoverBtn';
import { CommentSection } from './Card/CommentSection';
import { CommentAdd } from './Card/CommentAdd';
import { useToggle } from '../hooks/activateCommits';

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

	console.log(posts);
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
				<div className='post-commits-btns'>
					<SpeedDial
						ariaLabel='Post actions'
						icon={<ThumbUpOutlinedIcon />} // Icono principal simplificado
						direction='up'
						sx={{
							'& .MuiSpeedDial-fab': {
								width: { xs: 36, sm: 40 }, // Responsive
								height: { xs: 36, sm: 40 },
								boxShadow: 'none',
								backgroundColor: 'transparent',
								color: '#fff',
							},
							'& .MuiSpeedDialAction-fab': {
								width: 32,
								height: 32,
								boxShadow: 'none',
							},
						}}>
						<SpeedDialAction
							icon={<ThumbUpIcon />}
							slotProps={{ tooltip: { title: 'Me Gusta' } }}
						/>
						<SpeedDialAction
							icon={<FavoriteIcon />}
							slotProps={{ tooltip: { title: 'Me encanta' } }}
						/>
						<SpeedDialAction
							icon={<VolunteerActivismIcon />}
							slotProps={{ tooltip: { title: 'Me importa' } }}
						/>
						<SpeedDialAction
							icon={<SentimentDissatisfiedIcon />}
							slotProps={{ tooltip: { title: 'Me entristece' } }}
						/>
					</SpeedDial>
					<IconButton
						size='large'
						onClick={Addcomment.toggle}>
						<AddCommentOutlinedIcon fontSize='inherit' />
					</IconButton>
					<IconButton size='large'>
						<MarkEmailReadOutlinedIcon fontSize='inherit' />
					</IconButton>
					<SpeedDial
						ariaLabel='Post actions'
						icon={<ShareOutlinedIcon />} // Icono principal simplificado
						direction='up'
						sx={{
							'& .MuiSpeedDial-fab': {
								width: { xs: 36, sm: 40 }, // Responsive
								height: { xs: 36, sm: 40 },
								boxShadow: 'none',
								backgroundColor: 'transparent',
								color: '#fff',
							},
							'& .MuiSpeedDialAction-fab': {
								width: 32,
								height: 32,
								boxShadow: 'none',
							},
						}}>
						<SpeedDialAction
							icon={<WhatsAppIcon />}
							slotProps={{ tooltip: { title: 'Whatsapp' } }}
						/>
						<SpeedDialAction
							icon={<TelegramIcon />}
							slotProps={{ tooltip: { title: 'Telegram' } }}
						/>
						<SpeedDialAction
							icon={<MessageIcon />}
							slotProps={{ tooltip: { title: 'Url' } }}
						/>
					</SpeedDial>
				</div>
			</CardActions>
			{comments.isVisible && <CommentSection comments={posts.comments_preview || []} />}
			{Addcomment.isVisible && <CommentAdd />}
		</Card>
	);
};

//Me Gusta, Comentar, Enviar, Compartir
