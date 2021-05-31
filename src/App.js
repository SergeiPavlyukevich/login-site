import {BrowserRouter as Switch, Route} from "react-router-dom";

import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';

import './App.css';
// import Container from './Container';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/registration" component={Register} exact />
    </Switch>
    // <Container />
  );
}



