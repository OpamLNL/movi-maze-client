import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
    palette: {
        type: 'light',

        background: {
            default: '#f0dcc5',
        },

        primary: {
            contrastText: "#490000",
            main: "#d3b6ab",
            light: "#9d8977",
            dark: "#ede0d4",
        },
        secondary: {
            main: '#d3c8bb',
        },
    },

    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h5',
                    h2: 'h5',
                    h3: 'h5',
                    h4: 'h5',
                    h5: 'h5',
                    h6: 'h5',
                    subtitle1: 'h3',
                    subtitle2: 'h3',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
    },
});


export const darkTheme = createTheme({
    palette: {
        type: 'dark',

        background: {
            default: '#3c3434',

        },

        primary: {
            contrastText: '#FFB6C1',
            main: "#9d9092",
            dark: '#555555',
            light: "#615353",

        },
        secondary: {
            main: '#6f5e53',
        },
    },


    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h5',
                    h2: 'h5',
                    h3: 'h5',
                    h4: 'h5',
                    h5: 'h5',
                    h6: 'h5',
                    subtitle1: 'h3',
                    subtitle2: 'h6',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
    },
});