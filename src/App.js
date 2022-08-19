
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Contact from './components/Contact';

import hero from './image/slider-1.png';
import error from './image/error.png';
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero title={'Grow Your Business With'} img={hero}/>
      <Service />
      <Hero title={"About"} img={error}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
