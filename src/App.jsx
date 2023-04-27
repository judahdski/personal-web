import { useState } from 'react';
import './assets/style/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavText from './components/NavText';

const App = () => {
  const [navText, setNavText] = useState('HOME')

    return (
        <>
            <div className="container-fluid">
                <Header />
                <div class="split d-lg-flex">
                    <main class="container">
                      <Home />
                      <Projects />
                      <Contact />
                    </main>
                    <Footer />
                    <NavText text={navText} />
                </div>
            </div>
        </>
    );
}

export default App;
