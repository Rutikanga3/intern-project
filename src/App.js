import { Route, Routes } from 'react-router-dom';
import './App.css';
import Annivesary from './Components/Annivesary';
import Empowerment from './Components/Empowerment';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeaderLinks from './Components/HeaderLinks';
import Hero from './Components/Hero';
import Impact from './Components/Impact';
import Registration from './Components/Registration';
import Secondlast from './Components/Secondlast';
import Vision from './Components/Vision';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderLinks></HeaderLinks>
       <Routes>
        <Route path='/annivasary' element={<Annivesary />} />
        {/* <Route path='/empowerment' element={<Empowerment />} /> */}
      </Routes>
      <Annivesary></Annivesary>
      <Hero></Hero>
      <Vision></Vision>
      <Registration></Registration>
      <Impact></Impact>
      <Empowerment></Empowerment>
      <Secondlast></Secondlast>
      <Footer></Footer>
      


    </div>
  );
}

export default App;
