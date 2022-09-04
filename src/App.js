import './App.css';
import './components/login.css'
import Navigation from './components/Navigation/Navigation';
import { AuthContextProvider } from './context/Authcontext';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <AuthContextProvider >
        <Navigation />
        <Outlet />
      </AuthContextProvider>
    </div>
  );
}

export default App;