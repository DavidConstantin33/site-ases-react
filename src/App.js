import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Proiecte from "./Components/Projects";
import Services from "./Components/Services";
import Social from "./Components/Social";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Proiecte/>
        <Services/>
        <Social/>
        <Contact/>
    </div>
  );
}

export default App;
