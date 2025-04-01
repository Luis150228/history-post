import { IconButton, Tooltip, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { type Interactions, UserInteraction } from '../../types/type_postUser.d';

const interactionConfig = {
	likes: {
		icon: FavoriteIcon,
		userInteractionKey: 'liked',
		tooltip: (count: number, interacted: boolean) =>
			`${count} ${count === 1 ? 'like' : 'likes'}${interacted ? '-' : ''}`,
	},
	// comments: {
	// 	icon: CommentIcon,
	// 	userInteractionKey: null,
	// 	tooltip: (count: number) => `${count} ${count === 1 ? 'comentario' : 'comentarios'}`,
	// },
	shares: {
		icon: ShareIcon,
		userInteractionKey: 'shared',
		tooltip: (count: number, interacted: boolean) =>
			`${count} ${count === 1 ? 'compartido' : 'compartidos'}${interacted ? '-' : ''}`,
	},
	bookmarks: {
		icon: BookmarkAddedIcon,
		userInteractionKey: 'bookmarked',
		tooltip: (count: number, interacted: boolean) =>
			`${count} ${count === 1 ? 'guardado' : 'guardados'}${interacted ? '-' : ''}`,
	},
	views: {
		icon: VisibilityIcon,
		userInteractionKey: null,
		tooltip: (count: number) => `${count} visualizaciones`,
	},
} as const;

export default function InteractionIcons({ interactions }: { interactions: Interactions }) {
	const interactionEntries = Object.entries(interactions)
		.filter(([key]) => key in interactionConfig)
		.map(([key, count]) => {
			const interactionType = key as keyof typeof interactionConfig;
			const { icon: IconComponent, userInteractionKey, tooltip } = interactionConfig[interactionType];

			const userInteracted = userInteractionKey
				? interactions.user_interaction[userInteractionKey as keyof UserInteraction]
				: false;

			return {
				type: interactionType,
				count: count as number,
				IconComponent,
				userInteracted,
				tooltip: tooltip(count, userInteracted),
			};
		});

	return (
		<Stack
			direction='row'
			spacing={1}>
			{interactionEntries.map(({ IconComponent, tooltip, type, userInteracted }) => (
				<Tooltip
					key={type}
					title={tooltip}
					placement='top'
					arrow>
					<IconButton
						size='small'
						aria-label={type}
						color={userInteracted ? 'primary' : 'default'}>
						<IconComponent fontSize='inherit' />
					</IconButton>
				</Tooltip>
			))}
		</Stack>
	);
}
