import './App.css';
import ContactMe from './Container/ContactMe/ContactMe';
import Home from './Container/Home/Home';
import Projects from './Container/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
