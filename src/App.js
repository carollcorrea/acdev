import './App.css';
import Navbar from './components/sections/Navbar';
import Presentation from './components/sections/Presentation'
import Frontend from './components/sections/Frontend';
import Backend from './components/sections/Backend';
import Projects from './components/sections/Projects'
import Footer from './components/sections/Footer';
import ContactMe from './components/sections/ContactMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Frontend/>
      <Backend/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
