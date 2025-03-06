import React from 'react';
import './App.css'; // Para adicionar um estilo customizado

// Definindo a tipagem do componente App
const App: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Zelda: Breath of the Wild</h1>
        <p>Site</p>
      </header>

      <section className="image-section">
        <img
          src="https://retroage.net/wp-content/uploads/2022/07/zelda_breath_of_the_wild_small.jpg"  // Substitua com uma imagem real
          alt="Zelda: Breath of the Wild"
          className="hero-image"
        />
      </section>

      <section className="description">
        <h2>The Story of Zelda</h2>
        <p>
          Explore the vast world of Hyrule, solve puzzles, defeat powerful enemies, and uncover the secrets of the ancient
          kingdom in this breathtaking open-world game. A true masterpiece from Nintendo!
        </p>
      </section>

      <section className="cta">
        <a href="https://www.nintendo.com/games/detail/the-legend-of-zelda-breath-of-the-wild-switch/" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Learn More</button>
        </a>
      </section>
    </div>
  );
};

export default App;