import alfabeto from './components/alfabeto'
import palavras from './components/palavras';
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

  function terminarJogo() {
      setPalavraAcertada(true);
      setChutarLetra([renderizarPalavras]);
      setIniciarJogo(false);
  }

  return (
    <main>
      <Jogo 
      iniciarJogo={iniciarJogo} 
      setIniciarJogo={setIniciarJogo} 
      palavras={palavras} 
      renderizarPalavras={renderizarPalavras} 
      setRenderizarPalavras={setRenderizarPalavras}
      chutarLetra={chutarLetra}
      setChutarLetra={setChutarLetra}
      erro={erro}
      setErro={setErro}
      palavraAcertada={palavraAcertada}
      setPalavraAcertada={setPalavraAcertada}
      setBotaoClicado={setBotaoClicado}
      terminarJogo={terminarJogo}
      />
      <div className="container-botoes">
        <Letras 
        iniciarJogo={iniciarJogo} 
        alfabeto={alfabeto} 
        chutarLetra={chutarLetra}
        setChutarLetra={setChutarLetra}
        renderizarPalavras={renderizarPalavras}
        erro={erro}
        setErro={setErro}
        setIniciarJogo={setIniciarJogo} 
        botaoClicado={botaoClicado}
        setBotaoClicado={setBotaoClicado}
        terminarJogo={terminarJogo}
        setPalavraAcertada={setPalavraAcertada}
        />
        </div>
    </main>
  );
}