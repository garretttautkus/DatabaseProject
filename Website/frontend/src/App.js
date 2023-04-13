import './App.css';
import Todos from './pages/Todos'; //import any pages you have (this is my home page)
import Login from './pages/login';
import Home from './pages/userHome';
import Form from './pages/form';
import Hotel from './pages/hotel';
import Register from './pages/register';
import Update from './pages/updateForm';
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
            <Route path="/" element={<Login/>} />
            <Route path="/hotel" element={<Hotel/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/userHome" element={<Home/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/todos" element={<Todos/>} />
            <Route path="/updateForm" element={<Update/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
