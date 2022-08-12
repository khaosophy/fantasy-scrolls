import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollMaker from './components/ScrollMaker';

function App() {  
  return (<>
    <Header />
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Casper's Tabletop Tools</h1>} />
          <Route path="/scroll" element={<ScrollMaker />} />
        </Routes>
      </BrowserRouter>
    </main>
    <Footer />
  </>);
}

export default App;
