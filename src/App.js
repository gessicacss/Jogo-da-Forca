import alfabeto from './components/alfabeto'
import palavras from './palavras';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import { useState } from 'react';

export default function App() {
  const [iniciarJogo, setIniciarJogo] = useState(false);
  const [renderizarPalavras, setRenderizarPalavras] = useState([]);
  const [chutarLetra, setChutarLetra] = useState([]);
  const [botaoClicado, setBotaoClicado] = useState([]);
  const [erro, setErro] = useState(0);
  const [palavraAcertada, setPalavraAcertada] = useState(false);

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

  function terminarJogo(ganhou) {
      setPalavraAcertada(true);
      !ganhou && setChutarLetra([...renderizarPalavras])
      setIniciarJogo(false);
  }

  function checarPalavra() {
    const palavra = renderizarPalavras.every(l => chutarLetra.includes(l));
    if (palavra) {
      terminarJogo(true);
    }
}


    function checarLetra(letra){
      setBotaoClicado([...botaoClicado, letra]);
      const contemLetra = renderizarPalavras.includes(letra);
          if (contemLetra) {
              setChutarLetra([...chutarLetra, letra]);
          } else {
              const quantidadeErros = erro + 1;
              setErro(quantidadeErros);
              if (quantidadeErros === 6) {
                  terminarJogo(false);
              }
      }
  }

  return (
    <main>
      <Jogo 
      iniciarJogo={iniciarJogo} 
      renderizarPalavras={renderizarPalavras} 
      chutarLetra={chutarLetra}
      erro={erro}
      palavraAcertada={palavraAcertada}
      inicioJogo={inicioJogo}
      terminarJogo={terminarJogo}
      checarPalavra={checarPalavra}
      />
      <div className="container-botoes">
        <Letras 
        iniciarJogo={iniciarJogo} 
        alfabeto={alfabeto} 
        botaoClicado={botaoClicado}
        checarLetra={checarLetra}
        />
        </div>
    </main>
  );
}