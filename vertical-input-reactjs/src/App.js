import logo from './logo.svg';
import './App.css';
import  { useEffect, useState} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

function App() {
  const [letters, setLetters] = useState([])

  useEffect(() => {
    const onKeypress = e => {
      if ((e.keyCode >= 97 && e.keyCode <= 122) || (e.keyCode >= 1072 && e.keyCode <= 1103) || e.keyCode === 1105) {
        setLetters(prev => {
          return [
            ...prev,
            e.key.toUpperCase()
          ]
        })
      }
    }
  
    document.addEventListener('keypress', onKeypress);
  
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, []);

  const HTMLLetters = letters.map((lettler) => {
              return <div className="letter">{lettler}</div>
          })


  return (
    <>
      <CSSTransitionGroup 
        transitionName="anime">
        {HTMLLetters}
      </CSSTransitionGroup>
      <div className="underline">
        _
      </div>
    </>
  );
}

export default App;
