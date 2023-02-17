import forca0 from '../assets/img/forca0.png';
import forca1 from '../assets/img/forca1.png';
import forca2 from '../assets/img/forca2.png';
import forca3 from '../assets/img/forca3.png';
import forca4 from '../assets/img/forca4.png';
import forca5 from '../assets/img/forca5.png';
import forca6 from '../assets/img/forca6.png';


export default function Jogo({iniciarJogo, 
    setIniciarJogo, 
    palavras, 
    renderizarPalavras, 
    setRenderizarPalavras, 
    chutarLetra, 
    erro, 
    setErro,
    setChutarLetra,
    setPalavraAcertada,
    setBotaoClicado}){

    const imgs = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    function escolherPalavra(){
        const palavraEmbaralhada = palavras[Math.floor(Math.random() * palavras.length - 1)]
        const palavraSeparada = palavraEmbaralhada.split('');
        setRenderizarPalavras(palavraSeparada);
    }

    function inicioJogo(){
            setIniciarJogo(true);
            escolherPalavra();
            setChutarLetra([]);
            setBotaoClicado([]);
            setErro(0);
            setPalavraAcertada(false);
        }

    return (
        <div className="topo">
            <img src={imgs[erro]}/>
            <div className="lado-direito">
                 <button onClick={inicioJogo} >{iniciarJogo ? "Mudar Palavra" : "Escolher Palavra"}</button>
                 <div className="palavra-pra-acertar">
                 <RenderizarPalavras palavras={renderizarPalavras} chutarLetra={chutarLetra} setIniciarJogo={setIniciarJogo} setPalavraAcertada={setPalavraAcertada}/>
                 </div>
            </div>
        </div>
    );
}

function RenderizarPalavras({palavras, chutarLetra, erro, setIniciarJogo, setPalavraAcertada}){
    const checaPalavra = palavras.every(l => chutarLetra.includes(l));

    if (checaPalavra) {
        setIniciarJogo(false);
        setPalavraAcertada(true);
    }

    return (
        palavras.map((l, index) => <p key={index} className={erro === 6 ? 'errou' : checaPalavra ? 'acertou' : ''}>{chutarLetra.includes(l) ? l : "_" }</p>)
    )
}