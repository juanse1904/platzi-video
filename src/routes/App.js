/* se importa react, elementos de router que se necesitan y
todas las partes de la app como lo es Home Login y Register */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import notFound from '../containers/NotFound';
import Layout from '../components/Layout';
/* se  crea un directorio de las rutas deseadas y se exporta esa variable, en este caso App */
const App = () => (
  <BrowserRouter>
    <Layout>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registrer' component={Register} />
        <Route component={notFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
