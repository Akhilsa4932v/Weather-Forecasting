import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./infoBox.css";

function infoBox({info}){

const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=612x612&w=0&k=20&c=wp60t_1SUG9qDTxzAJwvfZYlLVAiu9r737F_nvtOSPA=";
const COLD_URL = "https://media.istockphoto.com/id/494811470/photo/winter-background-snowy-landscape-with-warning-sign.jpg?s=612x612&w=0&k=20&c=xIU8FYQXOjiSY7XLgShgI9Tlf1KJvY9LfTalFj2n1xg=";
const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=";
    return(
        <div className="infoBox">
            <div className="cardCointainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={info.humidity > 80?RAIN_URL:Math.round(info.temp-273.15) > 15?HOT_URL:COLD_URL}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                            info.humidity > 80?<ThunderstormIcon/>:Math.round(info.temp-273.15) > 15?<WbSunnyIcon/>:<AcUnitIcon/>
                        }
                    </Typography>
                    <Typography variant="body2"  color="text.secondary" component={"span"}>
                    <p>Temprature = {Math.round(info.temp-273.15)}&deg;C </p>
                    <p>Humidity = {info.humidity} </p>
                    <p>Min Temp = {Math.round(info.tempMin-273.15)}&deg;C</p>
                    <p>Max Temp = {Math.round(info.tempMax-273.15)}&deg;C</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {Math.round(info.feels_like-273.15)}&deg;C</p>
                    </Typography>
                </CardContent>
                
                </Card>
            </div>
    </div>
    );
}

export default infoBox;