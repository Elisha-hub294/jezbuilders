import { useEffect, useState } from 'react';
import './App.css';
import { Logo, Nav } from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Projects from './pages/Projects';
import Services from './pages/Services';

const screens = ['home', 'about', 'services', 'projects', 'pricing', 'contact'];

function getScreen() {
  return window.location.hash.replace('#', '') || 'home';
}

function App() {
  const [current, setCurrent] = useState(getScreen);

  useEffect(() => {
    const onHashChange = () => setCurrent(getScreen());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const pages = { home: <Home />, about: <About />, services: <Services />, projects: <Projects />, pricing: <Pricing />, contact: <Contact /> };

  return <div className="App"><Nav current={current} />{pages[screens.includes(current) ? current : 'home']}<footer><Logo /><span>© 2024 JEZBuilders. Built with intent.</span><span>Based everywhere / Working worldwide</span></footer></div>;
}

export default App;
