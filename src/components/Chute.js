export default function Chute({chutarPalavras, iniciarJogo, checarInput, checarChute}) {
    return (
        <div className="chute">
        <p>Já sei a palavra!</p>
        <input
        disabled={iniciarJogo ? false : true}        
        onChange={checarInput}
        value={chutarPalavras}
        placeholder="Digite a palavra"
        type="text"
        ></input>
        <button 
        disabled={iniciarJogo ? false : true}
        onClick={checarChute}
        >Chutar</button>
        </div>
    )
}