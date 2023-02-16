export default function Letras({iniciarJogo, alfabeto, chutarLetra, setChutarLetra, renderizarPalavras, erro, setErro}) {

        return (
        <>
        {alfabeto.map((l, index) => <Letra 
        key={index} 
        iniciarJogo={iniciarJogo} 
        chutarLetra={chutarLetra}
        setChutarLetra={setChutarLetra}
        renderizarPalavras={renderizarPalavras}
        letras={l}
        erro={erro}
        setErro={setErro}
        />
        )}
        </>
    )
}

function Letra({iniciarJogo, chutarLetra, setChutarLetra, renderizarPalavras, letras, erro, setErro}){

    function checarLetra(letra){
            if (renderizarPalavras.includes(letra)) {
                setChutarLetra([...chutarLetra, letra]);
                console.log(chutarLetra);
            } else {
                setErro(erro + 1);
                console.log(erro);
            }
        }

    return (
        <button className="botoes" onClick={() => checarLetra(letras)} disabled={iniciarJogo ? false : true}>{letras}</button>
    )
}