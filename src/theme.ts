import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import {
    experimental_extendTheme as extendTheme
} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        trelloCustom: {
            appBarHeight: string;
            boardBarHeight: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        trelloCustom: {
            appBarHeight: string;
            boardBarHeight: string;
        };
    }
}

const theme = extendTheme({
    trelloCustom: {
        appBarHeight: '48px',
        boardBarHeight: '58px',
    },
    colorSchemes: {
        light: {
            palette: {
                primary: teal,
                secondary: deepOrange
            }
        },
        dark: {
            palette: {
                primary: cyan,
                secondary: orange
            }
        },
    },
});

export default theme;