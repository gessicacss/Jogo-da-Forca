import alfabeto from './components/alfabeto';
import palavras from './palavras';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import { useState } from 'react';
import Chute from './components/Chute';

export default function App() {
  const [iniciarJogo, setIniciarJogo] = useState(false);
  const [renderizarPalavras, setRenderizarPalavras] = useState([]);
  const [chutarLetra, setChutarLetra] = useState([]);
  const [botaoClicado, setBotaoClicado] = useState([]);
  const [erro, setErro] = useState(0);
  const [palavraAcertada, setPalavraAcertada] = useState(false);
  const [chutarPalavras, setChutarPalavras] = useState('');
  const qntErroMax = 6;

  function escolherPalavra(){
    const embaralhar = palavras[Math.floor(Math.random() * palavras.length)];
    const palavraSeparada = embaralhar.split('');
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
      !ganhou && setChutarLetra([...renderizarPalavras]);
      setIniciarJogo(false);
  }

  function checarInput(e){
    setChutarPalavras(e.target.value);
  }

  function checarChute(){
    const palavraJunta = renderizarPalavras.join('');
    const palavraChutada = chutarPalavras.toLowerCase();
    if (palavraJunta === palavraChutada){
      setChutarLetra([...renderizarPalavras]);
      terminarJogo(true);
    } else {
      setErro(qntErroMax);
      terminarJogo(false);
    }
    setChutarPalavras('');
  }

    function checarLetra(letra){
      setBotaoClicado([...botaoClicado, letra]);
      const contemLetra = renderizarPalavras.includes(letra);
      const letras = [...chutarLetra, letra];
          if (contemLetra) {
              setChutarLetra(letras);
          } else {
              const quantidadeErros = erro + 1;
              setErro(quantidadeErros);
              if (quantidadeErros === qntErroMax) {
                  terminarJogo(false);
              }
      }
      const palavrasMostradas = [...renderizarPalavras];
      const checarPalavras = palavrasMostradas.every((l) => letras.includes(l));
      if (checarPalavras) {
        terminarJogo(true);
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
      qntErroMax={qntErroMax}
      />
      <div className="container-botoes">
        <Letras
        iniciarJogo={iniciarJogo}
        alfabeto={alfabeto}
        botaoClicado={botaoClicado}
        checarLetra={checarLetra}
        />
        </div>
        <Chute
        iniciarJogo={iniciarJogo}
        chutarPalavras={chutarPalavras}
        checarInput={checarInput}
        checarChute={checarChute}
        />
    </main>
  );
}