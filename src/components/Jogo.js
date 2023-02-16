import forca0 from '../assets/img/forca0.png';
import forca1 from '../assets/img/forca1.png';
import forca2 from '../assets/img/forca2.png';
import forca3 from '../assets/img/forca3.png';
import forca4 from '../assets/img/forca4.png';
import forca5 from '../assets/img/forca5.png';
import forca6 from '../assets/img/forca6.png';


export default function Jogo(){
    return (
        <div className="topo">
        <img src={forca0}/>
        <button onClick="">Escolher Palavra</button>
        </div>
    );
}