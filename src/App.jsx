import React from 'react';
import './App.scss';
import { FifthSection } from './components/FifthSection';
import { FirstSection } from './components/FirstSection';
import { FourthSection } from './components/FourthSection';
import { ParticleBg } from './components/ParticleBg';
import { SecondSection } from './components/SecondSection';
import { ThirdSection } from './components/ThirdSection';

function App() {
  return (
    <div className="App">
      <ParticleBg/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
    </div>
  );
}

export default App;
