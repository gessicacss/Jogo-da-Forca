export default function Letras({
    iniciarJogo, 
    alfabeto, 
    setErro,
    botaoClicado,
    checarLetra
}) {

        return (
        <>
        {alfabeto.map((l, index) => <Letra 
        key={index} 
        iniciarJogo={iniciarJogo} 
        letras={l}
        botaoClicado={botaoClicado}
        checarLetra={checarLetra}
        />
        )}
        </>
    )
}

function Letra({
    iniciarJogo, 
    letras, 
    checarLetra,
    botaoClicado,
}){
    const habilitarBotao = iniciarJogo && !botaoClicado.includes(letras);

    return (
        <button data-test="letter" className="botoes" onClick={() => checarLetra(letras)} disabled={habilitarBotao ? false : true}>{letras}</button>
    )
}