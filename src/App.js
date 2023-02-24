
import './App.css';
import Header from './components/Header/Header'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Testimonials from './components/Testomonials/Testimonials'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
