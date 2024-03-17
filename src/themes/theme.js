import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
    palette: {
        type: 'light',

        background: {
            default: '#c6c0d4',

        },


        primary: {
            contrast: '#8d8998',
            contrastText: '#f50057',
            dark: "rgb(59, 71, 59)",
            light: "rgb(119, 132, 119)",
            main: "#556655"
        },
        secondary: {
            main: '#f50057',
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
            default: '#1e1633',

        },

        primary: {
            contrast: '#37295d',
            contrastText: '#FFB6C1',
            dark: '#FFB6C1',
            light: "rgb(119, 132, 119)",
            main: "#556655"
        },
        secondary: {
            main: '#556655',
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