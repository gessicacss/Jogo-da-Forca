import alfabeto from './components/alfabeto'
import palavras from './components/palavras';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import { useState } from 'react';

export default function App() {
  const [iniciarJogo, setIniciarJogo] = useState(false);
  const [renderizarPalavras, setRenderizarPalavras] = useState([]);

  return (
    <main>
      <Jogo 
      iniciarJogo={iniciarJogo} 
      setIniciarJogo={setIniciarJogo} 
      palavras={palavras} 
      renderizarPalavras={renderizarPalavras} 
      setRenderizarPalavras={setRenderizarPalavras}
      />
      <div className="container-botoes">
        <Letras 
        iniciarJogo={iniciarJogo} 
        alfabeto={alfabeto} 
        />
        </div>
    </main>
  );
}