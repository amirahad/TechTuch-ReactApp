
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Contact from './components/Contact';

import hero from './image/slider-1.png';
import error from './image/error.png';
import Footer from './components/Footer';





function App() {
  const class1 = "col-md-6 pt-5  order-2 order-lg-1"
  const class2 = "col-lg-6 order-1 order-lg-2"
  return (
    <div className="App">
      <Navbar />
      <Hero title={'Grow Your Business With'} img={hero} class1= {class1} class2={class2}/>
      <Service />
      <div id="about">
      <Hero title={"About"} img={error} class2={class1} class1={class2}/>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
