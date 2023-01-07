import '../App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
