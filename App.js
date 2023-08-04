//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
//import Cards from './components/cards';
import Main from './components/main';
import Services from './components/services';
import Algo from './components/algo';
import Project from './components/project';
function App() {
  return (
    <>
   <Navbar/>
   <Main/>
   <Services/>
   <Algo/>
   <Project/>
   </>
  );
}

export default App;
