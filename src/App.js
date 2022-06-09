import { HashRouter, Routes, Route } from 'react-router-dom';
//import { Link } from "react-router-dom";
import ProtectedRoutes from './components/ProtecteRoutes';
//import MainLayout from './components/MainLayout';
import { Bills, Home } from './pages';
import { Header, Footer } from './components';
//import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <div className="App-container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/bills' element={<Bills />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
