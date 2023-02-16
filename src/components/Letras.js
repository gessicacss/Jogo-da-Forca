export default function Letras({iniciarJogo, alfabeto}) {

        return (
        <>
        {alfabeto.map((l, index) => <Letra 
        key={index} 
        iniciarJogo={iniciarJogo} 
        letras={l}
        />
        )}
        </>
    )
}

function Letra({iniciarJogo, letras}){
    return (
        <button className="botoes" onClick="" disabled={iniciarJogo ? false : true}>{letras}</button>
    )
}