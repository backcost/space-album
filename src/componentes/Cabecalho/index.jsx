import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
        <img src={logo} alt="Space Album" />
        <div className={styles.cabecalho__container}>
            <input className={styles.cabecalho__input} type='text' placeholder='O que você procura?' />
            <img src={search} alt='Busca' />
        </div>
    </header>
  )
}

export default Cabecalho