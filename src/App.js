import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SpellScroll from './components/SpellScroll';
import HandoutMaker from './components/ScrollMaker';

function App() {  
  return (<>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/handout" element={<HandoutMaker />} />
        <Route path="/scroll" element={<SpellScroll />} />
      </Routes>
    </main>
    <Footer />
  </>);
}

export default App;