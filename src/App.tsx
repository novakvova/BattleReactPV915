
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register';
import DefaultLayout from './components/containers/DefaultLayout';
import AdminLayout from './components/containers/AdminLayout';
import NoMatch from './components/NoMatch';

import UsersLayout from './components/containers/UsersLayout';
import ListUsers from './components/user/list';
import { History } from "history";

import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import { history } from "./store/reducers";
import { useLayoutEffect, useState } from 'react';
// interface AppProps {
//   history: History;
// }
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const App = () => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router basename={baseUrl!} location={history.location} navigator={history} navigationType={history.action}>
      <Routes location={history.location} >
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
        {/* </Route> */}

        {/* <Route path="/users" element={<UsersLayout />}>
            <Route index element={<ListUsers />} />
            <Route path="*" element={<NoMatch />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<RegisterPage />} />

            <Route path="*" element={<NoMatch />} />
          </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
