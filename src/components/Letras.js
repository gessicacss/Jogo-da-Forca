export default function Letras({alfabeto}) {
    return (
        <>
        {alfabeto.map(l => <Letra letras={l}/>)}
        </>
    )
}

function Letra({letras}){
    return (
        <button className="botoes" onClick="" disabled={true}>{letras}</button>
    )
}