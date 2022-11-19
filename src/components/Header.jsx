import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { CryptoContext } from '../Context/CryptoContext';

const useStyles = makeStyles(()=>({
    title:{
        flex:1,
        color:'gold',
        fontWeight:'bold',
        cursor:'pointer'
    }
}))

const Header = () =>{
    const classes = useStyles();
    const navigate = useNavigate()

    const {currency,setCurrency} = useContext(CryptoContext)

    const darkTheme = createTheme({
        palette:{
            primary:{
                main:'#fff'
            },
            type:"dark"
        },
    })
    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static' style={{maxHeight:'70px'}}>
            <Container>
                <Toolbar>
                    <Typography onClick={()=>navigate('/')} className={classes.title} >Crypto Tracker</Typography>

                    <Select
                        variant='outlined'
                        value={currency}
                        style={{
                            width:100,
                            height:40,
                           marginRight:'15px' 
                        }}
                        onChange={e => setCurrency(e.target.value)}
                    >
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'INR'}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    );
}

export default Header;