import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SpellScroll from './components/SpellScroll';
import HandoutMaker from './components/HandoutMaker';

function App() {  
  return (<>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/handout" element={<HandoutMaker />} />
        <Route path="/scroll" element={<SpellScroll />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </main>
    <Footer />
  </>);
}

export default App;

const Home = () => {
  const content = [
    {
      title: 'Handout Maker',
      description: 'Have a note or something you want to share with your players? Create it here, with various fonts useful for various occasions.',
      link: {
        label: 'Make Your Own Handout',
        to: '/handout',
      },
    },
    {
      title: 'Random Spell',
      description: 'Need to pick a random spell from the D&D 5e spell list? This tool will let you do just that! Very useful for things like generating a spell scroll.',
      link: {
        label: 'Pick a Random Spell',
        to: '/scroll',
      },
    },
  ]
  return (
    <div className="row">
      {content.map((card, i) => (
        <div className="col-md-6 col-xl-4 mb-4" key={i}>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">{card.title}</h1>
              {card.description && <p className="card-text">{card.description}</p>}
              <Link to={card.link.to}>{card.link.label}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}