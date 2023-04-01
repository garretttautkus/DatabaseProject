import './App.css';
import Todos from './pages/Todos'; //import any pages you have (this is my home page)
import Surprise from './pages/Surprise'; //import any pages you have
import Login from './pages/login';
import Home from './pages/userHome';
import Form from './pages/form';
import {BrowserRouter, Routes, Route} from "react-router-dom"; //import the router to navigate pages
import { ChakraProvider } from "@chakra-ui/react"; //import the Chakra UI library

function App() {
  return (
    
    // wrap the whole app in ChakraProvider
    //use the Route tag to route to your different pages
    
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todos/>} />
            <Route path="/surprise" element={<Surprise/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/form" element={<Form/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
