import { useEffect, useState } from 'react'
import './App.css'
import BG from './fixedbg/bg'
import Header from './header/header'
import Mainbody from './mainbody/mainbody'

function App() {

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="container">
      <Header toggleTheme={toggleTheme}/>
      <BG />    
      <Mainbody />  
    </div>
  )
}

export default App
