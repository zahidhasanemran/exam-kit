import React from 'react';
import style from './App.module.css';
import Layout from './Pages/Layout';
import HomePage from './Pages/HomePage/HomePage';
import { Switch, Route,  } from 'react-router-dom';
import ProductPage from "./Pages/ProductPage/ProductPage";
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';


function App() {
  
  return (
    <div className={style.App}>
      
      <Layout>

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product" exact component={ProductPage} />
            <Route path="/register" exact component={RegistrationPage} />
          </Switch>
        
      </Layout>

    </div>
  );
}

export default App;
