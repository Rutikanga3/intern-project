import './App.css';
import Annivesary from './Components/Annivesary';
import Header from './Components/Header';
import HeaderLinks from './Components/HeaderLinks';
import Hero from './Components/Hero';
import Impact from './Components/Impact';
import Registration from './Components/Registration';
import Vision from './Components/Vision';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderLinks></HeaderLinks>
      <Annivesary></Annivesary>
     <Hero></Hero>
     <Vision></Vision>
     <Registration></Registration>
     <Impact></Impact>
      


    </div>
  );
}

export default App;
