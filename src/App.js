import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollMaker from './components/ScrollMaker';

function App() {  
  return (<>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/scroll" element={<ScrollMaker />} />
      </Routes>
    </main>
    <Footer />
  </>);
}

export default App;
