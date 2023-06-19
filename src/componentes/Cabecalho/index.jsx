import logo from './logo.png'
import search from './search.png'

const Cabecalho = () => {
  return (
    <header>
        <img src={logo} alt="Space Album" />
        <div>
            <input type='text' placeholder='O que você procura?' />
            <img src={search} alt='Busca' />
        </div>
    </header>
  )
}

export default Cabecalho