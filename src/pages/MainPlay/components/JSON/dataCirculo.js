import virusImage from '../../../../image/virus.png'
import sintomaImage from "../../../../image/sintomas.png";
import prevencion from "../../../../image/prevencion.png";
import estadictica from "../../../../image/estadistica.png";


const dataCirculo=[
  {
    image:virusImage,
    nameLevel:'Covid',
    claseContenedor:'primera',
    direccion:'/Quiz'
  },
  {
    image:prevencion,
    nameLevel:'Prevención',
    claseContenedor:'segunda' ,
    direccion:""
  },
  {
    image:sintomaImage,
    nameLevel:'Sintomas',
    claseContenedor:'tercera',
    direccion:"/Quiz"
  },
  {
    image:estadictica,
    nameLevel:'Estadisticas',
    claseContenedor:'cuarta',
    direccion:"/Quiz" 
  }
]
export default dataCirculo