
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



// lugar.getLugarLatLng(argv.direccion)
//       .then(mensaje => {
//         console.log(mensaje);    
//     })
//       .catch(e => {
//         console.log('Error:', e);
//     });


// clima.getClima(40.750000, -74.000000)
//       .then(mensaje => {
//         console.log(mensaje);    
//     })
//     .catch(e => {
//       console.log('Error:', e);
//   });

const getInfo = async (direccion) => {

  lugar.getLugarLatLng(direccion)
       .then( lugar => {
          //console.log(lugar)
          clima.getClima(lugar.lat, lugar.lng)
               .then(clima => {
                console.log(`El clima de ${ lugar.name } es de ${ clima }`)
               })
               .catch(e => {
                      console.log(`No se pudo determinar el clima de ${ lugar.name }`, e);
                  }) 
       })
       .catch( console.log )
  
  //salida
  //El clima de XXXX es de XXX

  //No se pudo determinar el clima de XXX

}

getInfo(argv.direccion)
      .then(mensaje => {
          console.log(mensaje);    
      })
      .catch(e => {
        console.log('Error:', e);
    });






