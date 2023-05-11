import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  Nav  from "./components/Nav/Nav.jsx";
import { Login } from "./Pages/CreatePage";
import { AuthPage } from "./Pages/AuthPage";
import { useRoutes } from './Pages/routes';
import "./index.css";

function App() {
  const routes = useRoutes(false)
return (
  <Router>
  <div className='container'>
    {routes}
  {/* <Nav /> */}

  {/* <Component {...pageProps} /> */}
  </div>
  </Router>
);
}


export default App;