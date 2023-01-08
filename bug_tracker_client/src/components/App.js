import '../App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
