import forca0 from '../assets/img/forca0.png';
import forca1 from '../assets/img/forca1.png';
import forca2 from '../assets/img/forca2.png';
import forca3 from '../assets/img/forca3.png';
import forca4 from '../assets/img/forca4.png';
import forca5 from '../assets/img/forca5.png';
import forca6 from '../assets/img/forca6.png';
import palavras from './palavras';


export default function Jogo({iniciarJogo, setIniciarJogo, palavras, renderizarPalavras, setRenderizarPalavras, chutarLetra, erro, setChutarLetra}){

    const imgs = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    function escolherPalavra(){
        const palavraEmbaralhada = palavras[Math.floor(Math.random() * palavras.length - 1)]
        const palavraSeparada = palavraEmbaralhada.split('');
        setRenderizarPalavras(palavraSeparada);
        console.log(palavraSeparada);
    }

    function inicioJogo(){
            setIniciarJogo(true);
            escolherPalavra();
            setChutarLetra([]);
        }

    return (
        <div className="topo">
            <img src={imgs[erro]}/>
            <div className="lado-direito">
                 <button onClick={inicioJogo} >{iniciarJogo? "Mudar Palavra" : "Escolher Palavra"}</button>
                 <div className="palavra-pra-acertar">
                 <RenderizarPalavra palavra={renderizarPalavras} chutarLetra={chutarLetra} />
                 </div>
            </div>
        </div>
    );
}

function RenderizarPalavra({palavra, chutarLetra}){
    return (
        palavra.map((l, index) => <p key={index} className="letrinhas">{chutarLetra.includes(l) ? l : "_" }</p>)
    )
}