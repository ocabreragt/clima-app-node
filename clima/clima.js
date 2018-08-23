const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a1ad2ed1a6b92e2a902cb2c71abf4f34`);

    //console.log(resp.data.main.temp);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}