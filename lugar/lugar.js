const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeURL = encodeURI(dir);    
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {'x-rapidapi-key': '81d3c82e74msh536d0be2f77d452p1c63a7jsnc5a9561cecac'}
      });

const resp = await instance.get()
if(resp.data.Results.length === 0){
    throw new Error(`No hay resultados para ${dir}`);
}

const data = resp.data.Results[0];
const direccion = data.name;
const lat = data.lat;
const lng = data.lon;


    // instance.get()
    //         .then(resp => {
    //             console.log(resp.data.Results[0]);
    //         })
    //         .catch(err => {
    //             console.log('ERROR!!!', err);
    //         })
    
    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}

