import './App.css';
import { useRef, useState } from 'react'
import DisplayContext from './context/DisplayContext';
import Main from './components/Main';
import Projects from './components/Projects';
import InfoDisplay from './components/InfoDisplay';

function App() {

  // current mode (light or dark)
  const [isLight, setIsLight] = useState(true)
  //used for navbar
  const [backColor, setBackColor] = useState('cornflowerblue')
  const changeBackColor = () => {
    if (backColor === 'cornflowerblue') {
      setBackColor('#393053')
    } else {
      setBackColor('cornflowerblue')
    }
  }

  //color of text
  const [textColor, setTextColor] = useState('black')
  const changeTextColor = () => {
    if (textColor === 'black') {
      setTextColor('#F4EEE0')
    } else {
      setTextColor('black')
    }
  }

  //main background color of site
  const [bgColor, setBGColor] = useState('white')
  const changeBGColor = () => {
    if (bgColor === 'white') {
      setBGColor('#18122B')
    } else {
      setBGColor('white')
    }
  }

  // used for outside border of InfoDisplay
  const [borderColor, setBorderColor] = useState('4px solid cornflowerblue')
  const changeBorderColor = () => {
    if (borderColor === '4px solid cornflowerblue') {
      setBorderColor('4px solid #393053')
    } else {
      setBorderColor('4px solid cornflowerblue')
    }
  }

  // border of hr
  const [hrColor, setHrColor] = useState('1px solid black')
  const changeHrColor = () => {
    if (hrColor === '1px solid black') {
      setHrColor('1px solid #F4EEE0')
    } else {
      setHrColor('1px solid black')
    }
  }

  // background color for display containers more to the forefront
  const [boxBackgroundColor, setBoxBackgroundColor] = useState('white')
  const changeBoxBackgroundColor = () => {
    if (boxBackgroundColor === 'white') {
      setBoxBackgroundColor('#635985')
    } else {
      setBoxBackgroundColor('white')
    }
  }


  const mainRef = useRef(null)
  const projectsRef = useRef(null)
  const infoRef = useRef(null)

  const scrollTop = () => {
    mainRef.current.scrollIntoView({behavior: "smooth"})
  }

  const [display, setDisplay] = useState('about')
  const changeAbout = () => {
    setDisplay('about')
  }
  const changeWork = () => {
      setDisplay('work')
  }

  return (
    <DisplayContext.Provider value={{isLight, setIsLight, backColor, changeBackColor, textColor, changeTextColor, bgColor, changeBGColor, borderColor, changeBorderColor, hrColor, changeHrColor, boxBackgroundColor, changeBoxBackgroundColor}}>
      <div className="App">
          <button className='top-button' onClick={scrollTop} style={{color: textColor, backgroundColor: backColor}}>^</button>
          <Main mainRef={mainRef} infoRef={infoRef} projectsRef={projectsRef} changeAbout={changeAbout} changeWork={changeWork}/>
          <InfoDisplay infoRef={infoRef} display={display} changeAbout={changeAbout} changeWork={changeWork}/>
          <Projects projectsRef={projectsRef}/>
      </div>
    </DisplayContext.Provider>
  );
}

export default App;
