
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register';
import DefaultLayout from './components/containers/DefaultLayout';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
