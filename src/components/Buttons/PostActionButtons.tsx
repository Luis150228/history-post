import { IconButton, Snackbar, SnackbarCloseReason, SpeedDial, SpeedDialAction } from '@mui/material';
import {
	AddCommentOutlinedIcon,
	BookmarkAddedOutlinedIcon,
	BookmarkAddOutlinedIcon,
	CloseIcon,
	FavoriteIcon,
	MessageIcon,
	SentimentDissatisfiedIcon,
	ShareOutlinedIcon,
	TelegramIcon,
	ThumbUpIcon,
	ThumbUpOutlinedIcon,
	VolunteerActivismIcon,
	WhatsAppIcon,
} from '../../utils/icons';
import { PostActionButtonsProps } from '../../types/type_postUser';
import { SyntheticEvent, useState } from 'react';

export const PostActionButtons = ({ onAddComment }: PostActionButtonsProps) => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(true);
	};
	const handleClose = (_e: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const action = (
		<>
			{/* <Button
				color='secondary'
				size='small'
				onClick={handleClose}>
				UNDO
			</Button> */}
			<BookmarkAddedOutlinedIcon />
			<IconButton
				size='small'
				aria-label='close'
				color='inherit'
				onClick={handleClose}>
				<CloseIcon fontSize='small' />
			</IconButton>
		</>
	);

	return (
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
				onClick={onAddComment}>
				<AddCommentOutlinedIcon fontSize='inherit' />
			</IconButton>
			<IconButton
				size='large'
				onClick={handleClick}>
				<BookmarkAddOutlinedIcon fontSize='inherit' />
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
			<Snackbar
				open={open}
				autoHideDuration={2000}
				onClose={handleClose}
				message='Publicacion Guardada'
				action={action}
			/>
		</div>
	);
};
