import { RouterProvider } from 'react-router-dom';
import './App.css';
import AboutMe from './Container/AboutMe/AboutMe';
import ContactMe from './Container/ContactMe/ContactMe';
import Home from './Container/Home/Home';
import Projects from './Container/Projects/Projects';
import router from './Routes/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
