import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { UsersProvider } from './context/UsersContext';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <UsersProvider>
        <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
