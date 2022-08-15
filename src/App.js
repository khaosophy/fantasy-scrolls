import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollMaker from './components/ScrollMaker';
import SpellScroll from './components/SpellScroll';

function App() {  
  return (<>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/handout" element={<ScrollMaker />} />
        <Route path="/scroll" element={<SpellScroll />} />
      </Routes>
    </main>
    <Footer />
  </>);
}

export default App;