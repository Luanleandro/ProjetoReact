import './App.css';
import Logo from "./componentes/logo/index"
import sacola from "./imgs/icone-sacola.svg"
import perfil from "./imgs/user-svgrepo-com.svg"

const navbarOpcoes = ['Produtos', 'Compras', 'Cupons']
const navbarIcones = [sacola, perfil]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container-menu'>
        <Logo></Logo>
        <ul className='opcao'>
          { navbarOpcoes.map( (texto) => (
            <li className='opcoes'> <p>{texto}</p> </li>
          ))}
        </ul>

        <ul className='icones'>
          {navbarIcones.map((icone) => (
            <li className='icone'><img src={icone} width="20" height="20"></img></li>
          ))}
        </ul>
        </div>
      </header>
    </div>
    
  );
}

export default App;
