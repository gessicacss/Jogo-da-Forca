import forca0 from '../assets/img/forca0.png';
import forca1 from '../assets/img/forca1.png';
import forca2 from '../assets/img/forca2.png';
import forca3 from '../assets/img/forca3.png';
import forca4 from '../assets/img/forca4.png';
import forca5 from '../assets/img/forca5.png';
import forca6 from '../assets/img/forca6.png';

export default function Jogo({
    iniciarJogo,
    renderizarPalavras,
    chutarLetra,
    erro,
    palavraAcertada,
    inicioJogo,
    checarPalavra}){

    const imgs = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
    console.log(renderizarPalavras);
    checarPalavra();

    return (
        <div className="topo">
            <img data-test="game-image" src={imgs[erro]} alt="forca"/>
            <div className="lado-direito">
                 <button data-test="choose-word" onClick={inicioJogo} >{iniciarJogo ? "Mudar Palavra" : "Escolher Palavra"}</button>
                 <p data-test="word" className={erro === 6 ? 'errou' : palavraAcertada ? 'acertou' : 'normal'}>
                 <RenderizarPalavras palavras={renderizarPalavras} chutarLetra={chutarLetra}/>
                 </p>
            </div>
        </div>
    );
}

function RenderizarPalavras({palavras, chutarLetra}){
    return (
        palavras.map((l) => {return chutarLetra.includes(l) ? l : "_";})
    );
}