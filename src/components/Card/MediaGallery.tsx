import { useState } from 'react';
import { Box, ImageList, ImageListItem, Modal, IconButton, useMediaQuery, Theme } from '@mui/material';
import { NavigateBefore, NavigateNext, Close, Favorite, Share } from '@mui/icons-material';
import { Image } from '../../types/type_postUser.d';

export const MediaGallery = ({ images }: { images: Image[] }) => {
	const [open, setOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	const handleOpen = (index: number) => {
		setCurrentIndex(index);
		setOpen(true);
	};

	const handleClose = () => setOpen(false);

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	return (
		<Box sx={{ maxWidth: 800, mx: 'auto' }}>
			{/* Galería principal */}
			<ImageList
				variant='masonry'
				cols={isMobile ? 2 : 3}
				gap={8}>
				{images.map((img, index) => (
					<ImageListItem
						key={img.id}
						onClick={() => handleOpen(index)}>
						<img
							src={img.url}
							alt={img.alt}
							loading='lazy'
							style={{
								borderRadius: 8,
								cursor: 'pointer',
								aspectRatio: '1/1',
								objectFit: 'cover',
							}}
						/>
					</ImageListItem>
				))}
			</ImageList>

			{/* Modal para vista ampliada */}
			<Modal
				open={open}
				onClose={handleClose}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: isMobile ? '90%' : 'auto',
						bgcolor: 'background.paper',
						boxShadow: 24,
						borderRadius: 2,
						outline: 'none',
					}}>
					<Box sx={{ position: 'relative' }}>
						<img
							src={images[currentIndex]?.url}
							alt={images[currentIndex]?.alt}
							style={{
								maxHeight: '80vh',
								maxWidth: '100%',
								display: 'block',
								borderRadius: '8px 8px 0 0',
							}}
						/>

						{/* Controles de navegación */}
						<IconButton
							onClick={handlePrev}
							sx={{
								position: 'absolute',
								left: 8,
								top: '50%',
								bgcolor: 'rgba(0,0,0,0.5)',
								color: 'white',
								'&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
							}}>
							<NavigateBefore />
						</IconButton>

						<IconButton
							onClick={handleNext}
							sx={{
								position: 'absolute',
								right: 8,
								top: '50%',
								bgcolor: 'rgba(0,0,0,0.5)',
								color: 'white',
								'&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
							}}>
							<NavigateNext />
						</IconButton>

						{/* Botón de cerrar */}
						<IconButton
							onClick={handleClose}
							sx={{
								position: 'absolute',
								right: 8,
								top: 8,
								bgcolor: 'rgba(0,0,0,0.5)',
								color: 'white',
								'&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
							}}>
							<Close />
						</IconButton>
					</Box>

					{/* Footer tipo Instagram */}
					<Box
						sx={{
							p: 2,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<Box>
							<IconButton aria-label='like'>
								<Favorite />
							</IconButton>
							<IconButton aria-label='share'>
								<Share />
							</IconButton>
						</Box>
						<Box sx={{ display: 'flex', gap: 0.5 }}>
							{images.map((_, index) => (
								<Box
									key={index}
									sx={{
										width: 8,
										height: 8,
										borderRadius: '50%',
										bgcolor: currentIndex === index ? 'primary.main' : 'grey.400',
									}}
								/>
							))}
						</Box>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
};

// Uso del componente
// const App = () => {
// 	const sampleImages = [
// 		{ id: 1, url: 'https://picsum.photos/600/600?random=1', alt: 'Imagen 1' },
// 		{ id: 2, url: 'https://picsum.photos/600/600?random=2', alt: 'Imagen 2' },
// 		// Agrega más imágenes...
// 	];

// 	return <MediaGallery images={sampleImages} />;
// };
