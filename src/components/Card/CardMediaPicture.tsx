import { SetStateAction, useState } from 'react';
import { CardMedia, Box, Modal, IconButton, Typography } from '@mui/material';
import { Close, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { MediaItem } from '../../types/type_postUser.d';

export const CardMediaPicture = ({ images }: { images: MediaItem[] }) => {
	const [open, setOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleOpen = (index: SetStateAction<number>) => {
		setCurrentImageIndex(index);
		setOpen(true);
	};

	const handleClose = () => setOpen(false);

	const handleNext = () => {
		setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const handlePrev = () => {
		setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	return (
		<>
			{/* Vista previa de la imagen principal */}
			<Box sx={{ position: 'relative', marginLeft: '1.5rem' }}>
				<CardMedia
					component='img'
					image={images[0].url}
					alt={images[0].alt_text}
					onClick={() => handleOpen(0)}
					sx={{
						cursor: 'pointer',
						width: '95%',
						height: 'auto',
						objectFit: 'cover',
					}}
				/>

				{/* Indicador de múltiples imágenes */}
				{images.length > 1 && (
					<Box
						sx={{
							position: 'absolute',
							top: 16,
							right: 16,
							backgroundColor: 'rgba(0,0,0,0.6)',
							borderRadius: '50%',
							width: 40,
							height: 40,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: 'white',
						}}>
						<Typography variant='caption'>+{images.length - 1}</Typography>
					</Box>
				)}
			</Box>

			{/* Modal de la galería completa */}
			<Modal
				open={open}
				onClose={handleClose}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: '90vw',
						maxWidth: 800,
						maxHeight: '90vh',
						outline: 'none',
					}}>
					{/* Contenedor de la imagen */}
					<Box
						sx={{
							position: 'relative',
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'black',
						}}>
						<img
							src={images[currentImageIndex].url}
							alt={images[currentImageIndex].alt_text}
							style={{
								maxHeight: '90vh',
								maxWidth: '100%',
								objectFit: 'contain',
							}}
						/>

						{/* Controles de navegación */}
						{images.length > 1 && (
							<>
								<IconButton
									onClick={handlePrev}
									sx={{
										position: 'absolute',
										left: 16,
										color: 'white',
										bgcolor: 'rgba(0,0,0,0.5)',
										'&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
									}}>
									<NavigateBefore fontSize='large' />
								</IconButton>

								<IconButton
									onClick={handleNext}
									sx={{
										position: 'absolute',
										right: 16,
										color: 'white',
										bgcolor: 'rgba(0,0,0,0.5)',
										'&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
									}}>
									<NavigateNext fontSize='large' />
								</IconButton>
							</>
						)}

						{/* Contador de imágenes (1/4) */}
						<Typography
							variant='body2'
							sx={{
								position: 'absolute',
								top: 16,
								left: 16,
								color: 'white',
								backgroundColor: 'rgba(0,0,0,0.5)',
								px: 1,
								borderRadius: 2,
							}}>
							{currentImageIndex + 1} / {images.length}
						</Typography>

						{/* Botón cerrar */}
						<IconButton
							onClick={handleClose}
							sx={{
								position: 'absolute',
								top: 16,
								right: 16,
								color: 'white',
								bgcolor: 'rgba(0,0,0,0.5)',
								'&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
							}}>
							<Close fontSize='large' />
						</IconButton>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
