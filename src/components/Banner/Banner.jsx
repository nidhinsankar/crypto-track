import { Container, makeStyles, Typography } from "@material-ui/core"
import Carousel from "./Carousal"

const useStyles = makeStyles(()=>({
    banner:{
        backgroundImage: "url('./banner2.jpg')"
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
}))


const Banner = () =>{

    const classes = useStyles()

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography variant='h4' style={{
                        fontWeight: "bold",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                    }}>Crypto Tracker</Typography>
                    <Typography 
                        variant="subtitle2" 
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}
                    >get all info regarding the crypto currencies</Typography>
                </div>
                {/* <Carousel /> */}
            </Container>
        </div>
    )
}

export default Banner