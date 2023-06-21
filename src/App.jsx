import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import SpellScroll from './pages/SpellScroll';
import HandoutMaker from './pages/HandoutMaker';
import SpellList from './pages/SpellList';
import SpellDescription from './pages/SpellDescription';
import MonsterList from './pages/MonsterList';
import MonsterDescription from './pages/MonsterDescription';

function App() {  
  return (<>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/handout" element={<HandoutMaker />} />
        <Route path="/scroll" element={<SpellScroll />} />
        <Route path="/spells">
          <Route index element={<SpellList />} />
          <Route path=":spell" element={<SpellDescription />} />
        </Route>
        <Route path="/monsters">
          <Route index element={<MonsterList />} />
          <Route path=":monster" element={<MonsterDescription />} />
        </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </main>
    <Footer />
  </>);
}

export default App;

const Home = () => {
  // todo: use this content throughout the site... avoid repetition. see helmet descriptions on internal pages
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
    {
      title: 'Spell List',
      description: 'There are so many spells in Dungeons & Dragons 5e! Find the one that best fits your needs.',
      link: {
        label: 'Browse Spells',
        to: '/spells',
      },
    },
  ]
  return (
    <div className="row">
      <Helmet>
        <title>Casper's Tabletop Tools</title>
        <meta name="description" content="A suite of tools to help players and dungeon masters get organized." />
      </Helmet>
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