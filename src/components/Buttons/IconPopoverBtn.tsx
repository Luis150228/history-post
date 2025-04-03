import { Tooltip, Stack, SpeedDial, SpeedDialAction } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { type Interactions, UserInteraction } from '../../types/type_postUser.d';

const interactionConfig = {
	likes: {
		icon: FavoriteIcon,
		userInteractionKey: 'liked',
		tooltip: (count: number, interacted: boolean) =>
			`${count} ${count === 1 ? 'like' : 'likes'}${interacted ? '-' : ''}`,
	},
} as const;

export default function InteractionIcons({ interactions }: { interactions: Interactions }) {
	const interactionEntries = Object.entries(interactions)
		.filter(([key]) => key in interactionConfig)
		.map(([key, count]) => {
			const interactionType = key as keyof typeof interactionConfig;
			const { icon: IconComponent, userInteractionKey, tooltip } = interactionConfig[interactionType];

			const userInteracted = userInteractionKey
				? interactions.user_interaction?.[userInteractionKey as keyof UserInteraction] ?? false
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
			{interactionEntries.map(({ IconComponent, tooltip, type }) => (
				<Tooltip
					key={type}
					title={tooltip}
					placement='left'
					arrow>
					<SpeedDial
						ariaLabel='Post actions'
						icon={<IconComponent fontSize='inherit' />} // Icono principal simplificado
						direction='right'
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
				</Tooltip>
			))}
		</Stack>
	);
}
