const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=99171eed9173de19cacc2d0c7c9dba70&units=metric`)


    return resp.data.main.temp;
}

module.exports = {
    getClima
}
