import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProjectHomePage from './pages/ProjectHomePage';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
// import Account from './pages/Account';
import AddingProfile from './pages/AddingProfile';
import UserProfile from './pages/UserProfile';
import Protected from './components/Protected';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<ProjectHomePage />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='home' element={<Protected> <Home /> </Protected>} />
          {/* <Route path='account' element={<Account />} /> */}
          <Route path='user-profile' element={<Protected> <UserProfile /> </Protected>} />
          <Route path='adding-profile' element={<Protected><AddingProfile /> </Protected>} />
          <Route 
            path='*' 
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            } 
          />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
