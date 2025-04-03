import { IconButton, ListItem } from '@mui/material';
import InteractionIcons from '../Buttons/IconPopoverBtn';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import { CommentAdd } from '../Card/CommentAdd';
import { useToggle } from '../../hooks/activateCommits';

export const ReplayAndButtons = ({ interactions }: { interactions: any }) => {
	const comments = useToggle();

	const handleToggleReplay = () => {
		if (!comments.isVisible) {
			comments.open();
		} else {
			comments.close();
		}
	};

	return (
		<>
			<ListItem className='resumen-icons-comments'>
				<IconButton
					edge='end'
					size='small'
					onClick={handleToggleReplay}>
					<ReplyAllOutlinedIcon />
				</IconButton>
				<InteractionIcons interactions={interactions || {}} />
			</ListItem>
			<ListItem className='replay-section'>{comments.isVisible && <CommentAdd />}</ListItem>
		</>
	);
};
