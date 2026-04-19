import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [opinion, setOpinion] = useState('');
  const [listaOpiniones, setListaOpiniones] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const enviarOpinion = (e) => {
    e.preventDefault();
    if (opinion.trim() === '') return; 
    
    setListaOpiniones([...listaOpiniones, opinion]);
    setOpinion('');
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>

      <header className="main-header">
        <h1>Encargo React IPG</h1>
        <button
          className='boton-modo'
          onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </header>

      <main className="main-content">
        <section className="inicio">
          <h2>Inicio</h2>
          <p>Opina de mis mascotas</p>
        </section>

        <section className="contenedor">
          <Card
            title="kalesi"
            description="ella es una de mis perritas"
            img="/kalesi.jpeg"
          />
          <Card
            title="naig"
            description="ella es mi gata mi mascota mas nueva"
            img="/naig.jpeg"
          />
        </section>

        <section className="opiniones">
          <h3>opiniones</h3>
          <form onSubmit={enviarOpinion}>
            <textarea
              placeholder="Escribe tu opinión..."
              value={opinion}
              onChange={(e) => setOpinion(e.target.value)}
            />
            <button type="submit" className='boton-opinion'>
              Enviar Opinión
            </button>
          </form>
          <ul>
            {listaOpiniones.map((op, index) => (
              <li key={index}>{op}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;