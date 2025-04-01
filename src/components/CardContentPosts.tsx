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
import ListIcon from '@mui/icons-material/List';
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

export const CardContentPosts = ({ posts }: { posts: SocialMediaPost }) => {
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
						<IconButton aria-label='settings'>
							<ListIcon />
						</IconButton>
						<IconButton aria-label='close'>
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
						<Typography>
							<span className='commits-data'>{posts.interactions.comments}</span> Commits
						</Typography>
						<Typography>
							<span className='share-data'>{posts.interactions.shares}</span> Shared
						</Typography>
					</div>
				</div>
				<div className='post-commits-btns'>
					<SpeedDial
						ariaLabel='Post actions'
						icon={<ThumbUpOutlinedIcon />} // Icono principal simplificado
						// openIcon={<FavoriteIcon />} // Icono cuando está abierto
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
					<IconButton size='large'>
						<AddCommentOutlinedIcon fontSize='inherit' />
					</IconButton>
					<IconButton size='large'>
						<MarkEmailReadOutlinedIcon fontSize='inherit' />
					</IconButton>
					<SpeedDial
						ariaLabel='Post actions'
						icon={<ShareOutlinedIcon />} // Icono principal simplificado
						// openIcon={<FavoriteIcon />} // Icono cuando está abierto
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
			<CommentSection comments={posts.comments_preview || []} />
			<CommentAdd />
		</Card>
	);
};

//Me Gusta, Comentar, Enviar, Compartir
