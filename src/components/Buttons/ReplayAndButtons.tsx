import { IconButton, ListItem } from '@mui/material';
import InteractionIcons from '../Buttons/IconPopoverBtn';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import { CommentAdd } from '../Card/CommentAdd';
import { useToggle } from '../../hooks/activateCommits';
import { type CommentPreview, Interactions } from '../../types/type_postUser.d';
import { CommentSection } from '../Card/CommentSection';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CommentsDisabledOutlinedIcon from '@mui/icons-material/CommentsDisabledOutlined';
import { green, grey } from '@mui/material/colors';

export const ReplayAndButtons = ({
	interactions,
	replays,
}: {
	interactions: Interactions;
	replays: CommentPreview[];
}) => {
	const AddReplay = useToggle();
	const CommitsReplay = useToggle();
	// const exisReplay = replays.hasOwnProperty('comment_id');
	const exisReplay = Array.isArray(replays) && replays.length > 0;

	const handleToggleReplay = () => {
		if (!AddReplay.isVisible) {
			AddReplay.open();
		} else {
			AddReplay.close();
		}
	};

	const handleToggleReplayCommits = () => {
		if (!CommitsReplay.isVisible) {
			CommitsReplay.open();
		} else {
			CommitsReplay.close();
		}
	};

	return (
		<>
			<ListItem className='resumen-icons-comments'>
				<IconButton
					edge='end'
					size='small'
					disabled={!exisReplay}
					onClick={handleToggleReplayCommits}>
					{exisReplay ? (
						<CommentOutlinedIcon sx={{ fill: green }} />
					) : (
						<CommentsDisabledOutlinedIcon sx={{ fill: grey }} />
					)}
				</IconButton>
				<IconButton
					edge='end'
					size='small'
					onClick={handleToggleReplay}>
					<ReplyAllOutlinedIcon />
				</IconButton>
				<InteractionIcons interactions={interactions || {}} />
			</ListItem>
			<ListItem className='replay-section'>{AddReplay.isVisible && <CommentAdd />}</ListItem>
			<ListItem>
				{CommitsReplay.isVisible && (
					<div
						className='comment-response-section'
						style={{ paddingLeft: '2rem' }}>
						<CommentSection
							comments={Array.isArray(replays) ? replays : [replays]} // <-- Lo convierte a arreglo si no lo es
						/>
					</div>
				)}
			</ListItem>
		</>
	);
};
