import './assets/style/reset.css'
import './assets/style/style.css'
import Jogo from './components/Jogo';
import alfabeto from './components/alfabeto'
import Letras from './components/Letras';

export default function App() {
  return (
    <main>
      <Jogo/>
      <div className="container-botoes">
        <Letras alfabeto={alfabeto}/>
        </div>
    </main>
  );
}