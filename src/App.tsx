import './App.css';
import avatar from '../assets/avatar.jpeg';
import { useEffect } from 'react';

const App = () => {

  useEffect(()=> {
      window.addEventListener('load', () =>{ 
        document.body.className = document.body.className.replace(/\bis-preload\b/, ''); 
      });
  }, []);

  return (
    <section id="main">
      <header>
        <span className="avatar"><img src={avatar} alt="avatar image"/></span>
        <h1>Ayoub El Hayat</h1>
        <p>Senior Software Engineer</p>
        <h6>Based in Oslo 📍</h6>
        <p> Working as a tech lead at <a href="https://www.aize.io/" target='_blank'>Aize</a>.</p>
      </header>
    
      <footer>
        <ul className="icons">
          <li><a href="https://www.linkedin.com/in/ayoub-el-hayat/" className="icon brands fa-linkedin">Linkedin</a></li>
          <li><a href="https://github.com/ser14joker" className="icon brands fa-github">Github</a></li>
          <li><a href="mailto:ayoubelhayat@gmail.com" className="icon fa-envelope">Email</a></li>
        </ul>
        <button>
          <a href="./resume.pdf">DOWNLOAD MY CV</a>
        </button>
      </footer>
		</section>
  );
};

export default App;
