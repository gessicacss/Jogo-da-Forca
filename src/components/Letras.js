export default function Letras({iniciarJogo, 
    alfabeto, 
    chutarLetra, 
    setChutarLetra, 
    renderizarPalavras, 
    erro, 
    setErro,
    botaoClicado,
    setBotaoClicado,
    terminarJogo,
    setPalavraAcertada}) {

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
        setBotaoClicado={setBotaoClicado}
        botaoClicado={botaoClicado}
        terminarJogo={terminarJogo}
        setPalavraAcertada={setPalavraAcertada}
        />
        )}
        </>
    )
}

function Letra({iniciarJogo, 
    chutarLetra, 
    setChutarLetra, 
    renderizarPalavras, 
    letras, 
    erro, 
    setErro, 
    setBotaoClicado,
    botaoClicado,
    terminarJogo,
    setPalavraAcertada
}){

    function checarLetra(letra){
        setBotaoClicado([...botaoClicado, letra]);
        const contemLetra = renderizarPalavras.includes(letra);
            if (contemLetra) {
                setChutarLetra([...chutarLetra, letra]);
            } else {
                const quantidadeErros = erro + 1;
                setErro(quantidadeErros);
                if (quantidadeErros === 6) {
                // setChutarLetra([renderizarPalavras]);
                terminarJogo();
                }
        }
    }

    const habilitarBotao = iniciarJogo && !botaoClicado.includes(letras);

    return (
        <button className="botoes" onClick={() => checarLetra(letras)} disabled={habilitarBotao ? false : true}>{letras}</button>
    )
}