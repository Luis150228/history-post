import { createTheme } from "@mui/material";

// Augment the palette to include a color
declare module '@mui/material/styles' {
    interface Palette {
        iconVideo: Palette['primary'];
        iconPicture: Palette['primary'];
        iconEmoji: Palette['primary'];
    }
  
    interface PaletteOptions {
        iconVideo?: PaletteOptions['primary'];
        iconPicture?: PaletteOptions['primary'];
        iconEmoji?: PaletteOptions['primary'];
    }
  }

  declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    iconVideo: true;
    iconPicture: true;
    iconEmoji: true;
  }
}
  // Update the Button's color options to include a option
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        iconVideo: true;
        iconPicture: true;
        iconEmoji: true;
    }
  }

  let theme = createTheme({
    // Theme customization goes here as usual, including tonalOffset and/or
    // contrastThreshold as the augmentColor() function relies on these
  });

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		divider: '#afafaf',
		background: {
			default: '#2f3742', // Color de fondo principal
			paper: '#364357', // Color para componentes como Cards, Dialogs
		},
        iconVideo: theme.palette.augmentColor({
            color: {
              main: '#c9046a',
            },
            name: 'iconVideo',
        }),
        iconPicture: theme.palette.augmentColor({
            color: {
              main: '#04c922',
            },
            name: 'iconPicture',
        }),
        iconEmoji: theme.palette.augmentColor({
            color: {
              main: '#b6c904',
            },
            name: 'iconEmoji',
        }),
	},
});


export const lightTheme = createTheme(theme,{
	palette: {
		mode: 'light',
		background: {
			default: '#f5f5f5',
			paper: '#f0f0f0',
		},
        primary: {
            main: '#f34743',
            light: '#757ce8',
            dark: '#002884',
        },
        iconVideo: theme.palette.augmentColor({
            color: {
              main: '#800143',
            },
            name: 'iconVideo',
        }),
        iconPicture: theme.palette.augmentColor({
            color: {
              main: '#027514',
            },
            name: 'iconPicture',
        }),
        iconEmoji: theme.palette.augmentColor({
            color: {
              main: '#7c8a01',
            },
            name: 'iconEmoji',
        }),
	},
});