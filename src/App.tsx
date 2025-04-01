import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './themes';
import { CardContentPost } from './components/CardContentPost';
import { CardContentPosts } from './components/CardContentPosts';
import { SocialMediaPost } from './types/type_postUser.d';

const samplePosts: SocialMediaPost[] = [
	{
		post_id: 'uuidv4_or_00000001',
		author: {
			user_id: 'user123',
			username: 'octocat',
			profile_picture: 'https://github.com/octocat.png',
			verified: false,
		},
		content: {
			text: '¡Este es mi primer post en la red social! #inspired',
			media: [
				{
					type: 'image',
					url: 'https://www.santander.com.mx/ceb/images/sala-prensa/2019/invierte_608.jpg',
					alt_text: 'Imagen descriptiva para accesibilidad',
					width: 1080,
					height: 720,
				},
				{
					type: 'image',
					url: 'https://www.santander.com.mx/ceb/images/sala-prensa/2019/SDEMH_7423_1.jpg',
					alt_text: 'Imagen descriptiva para accesibilidad',
					width: 1080,
					height: 720,
				},
			],
			links: [
				{
					url: 'https://example.com/related-article',
					title: 'Artículo relacionado interesante',
					description: 'Descripción del enlace compartido',
					image: 'https://example.com/link-preview.jpg',
				},
			],
		},
		metadata: {
			created_at: '2023-11-15T14:30:00Z',
			updated_at: '2023-11-15T14:35:00Z',
			language: 'es',
			content_rating: 'safe',
		},
		interactions: {
			likes: 42,
			comments: 5,
			shares: 3,
			bookmarks: 1,
			views: 150,
			user_interaction: {
				liked: true,
				shared: false,
				bookmarked: true,
			},
		},
		comments_preview: [
			{
				comment_id: 'comment456',
				user: {
					user_id: 'user789',
					username: 'janedoe',
				},
				text: '¡Felicidades por tu primer post!',
				created_at: '2023-11-15T14:32:00Z',
				interactions: {
					likes: 1,
					comments: 0,
					shares: 1,
					bookmarks: 1,
					views: 2,
				},
				comments_response: {
					comment_id: 'comment461',
					user: {
						user_id: 'user777',
						username: 'fenixFree',
					},
					text: 'Fotos increibles de donde son????????????????????',
					created_at: '2023-11-15T15:11:00Z',
					interactions: {
						likes: 1,
						comments: 0,
						shares: 1,
						bookmarks: 1,
						views: 2,
					},
				},
			},
			{
				comment_id: 'comment457',
				user: {
					user_id: 'user777',
					username: 'fenixFree',
				},
				text: 'Fotos increibles de donde son????????????????????',
				created_at: '2023-11-15T15:11:00Z',
			},
			{
				comment_id: 'comment458',
				user: {
					user_id: 'user789',
					username: 'janedoe',
				},
				text: '¡Gracias! Son de mi último viaje a la playa.',
				created_at: '2023-11-15T15:22:00Z',
			},
		],
		privacy: {
			visibility: 'public',
			allowed_users: [],
			blocked_users: ['user456'],
		},
		monetization: {
			is_sponsored: false,
			sponsor: null,
			ad_metadata: null,
		},
		version: '1.0',
	},
	{
		post_id: 'uuidv4_or_00000002',
		author: {
			user_id: 'user123',
			username: 'octocat',
			profile_picture: 'https://github.com/octocat.png',
			verified: false,
		},
		content: {
			text: '¡Este es mi segundo post en la red social! #excited',
			media: [
				{
					type: 'image',
					url: 'https://picsum.photos/600/600?random=4',
					alt_text: 'Imagen descriptiva para accesibilidad',
					width: 1080,
					height: 720,
				},
				{
					type: 'image',
					url: 'https://picsum.photos/600/600?random=12',
					alt_text: 'Imagen descriptiva para accesibilidad',
					width: 1080,
					height: 720,
				},
				{
					type: 'image',
					url: 'https://picsum.photos/600/600?random=34',
					alt_text: 'Imagen descriptiva para accesibilidad',
					width: 1080,
					height: 720,
				},
			],
			links: [
				{
					url: 'https://example.com/related-article',
					title: 'Artículo relacionado interesante',
					description: 'Descripción del enlace compartido',
					image: 'https://example.com/link-preview.jpg',
				},
			],
		},
		metadata: {
			created_at: '2023-11-15T14:40:00Z',
			updated_at: '2023-11-15T14:55:00Z',
			language: 'es',
			content_rating: 'safe',
		},
		interactions: {
			likes: 42,
			comments: 1,
			shares: 0,
			bookmarks: 1,
			views: 150,
			user_interaction: {
				liked: true,
				shared: false,
				bookmarked: true,
			},
		},
		comments_preview: [
			{
				comment_id: 'comment456',
				user: {
					user_id: 'user789',
					username: 'janedoe',
				},
				text: '¡Felicidades por tu segundo post!',
				created_at: '2023-11-15T14:52:00Z',
			},
		],
		privacy: {
			visibility: 'public',
			allowed_users: [],
			blocked_users: ['user456'],
		},
		monetization: {
			is_sponsored: false,
			sponsor: null,
			ad_metadata: null,
		},
		version: '1.0',
	},
];

export function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<main className='app-publications'>
				<section className='section-publication'>
					<CardContentPost />
				</section>
				<section className='section-posts'>
					{samplePosts.map((post) => (
						<CardContentPosts
							key={post.post_id}
							posts={post}
						/>
					))}
				</section>
			</main>
		</ThemeProvider>
	);
}

export default App;
