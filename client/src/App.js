import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout.js'
import LandingPage from './pages/LandingPage.js';
import LoginPage from './pages/LoginPage.js';
import SignUp from './pages/SignupPage.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp/>} />
      </Route>
    </Routes>
  );
}

export default App;
