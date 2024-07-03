import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout.js'
import LandingPage from './pages/LandingPage.js';
import LoginPage from './pages/LoginPage.js';
import SignUp from './pages/SignupPage.js';
import { UserContextProvider } from './UserContext.js';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
