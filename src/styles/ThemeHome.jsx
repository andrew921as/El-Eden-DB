import { createTheme } from "@mui/material";

const Colors = {
    primary: '#FDD68D',
    secondary: '##FF5C0C'
};

const theme = createTheme({

    palette: {
        primary: {
            main: Colors.primary
        },
    },

    components: {

        MuiTypography: {
            defaultProps: {
                fontSize: '2rem'
            }
        },
        MuiMenuItem: {
            styleOverrides:{
                root:{
                    backgroundColor: 'rgba(255 255 255 / 55%)',
                    ":hover":{backgroundColor: 'rgba(139 139 139 / 40%)'},
                    fontSize: '1.2rem',
                    gap: '10px',
                },
                
            },

        },

        MuiAccordion: {
            styleOverrides:{
                root: {
                    background: 'rgba(229 229 229  / 55%)',
                    border: '2px solid black'
                }
            }
        },

        MuiAccordionSummary: {
            styleOverrides:{
                root:{
                    backgroundColor: 'rgba(229 229 229  / 55%)',
                },
                content:{
                    gap: 20
                }
            },

            
        }, 

        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: '0 0'
                    
                }
            }
        }
    }

});

export default theme;