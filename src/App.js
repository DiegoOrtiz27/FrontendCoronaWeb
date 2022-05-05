import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Box from "./pages/Comentar/Comentarios"
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import mainPlay from "./pages/MainPlay/MainPlay";
import Particles from "./commons/particulas/Particles"
import "./commons/Styles/fondos.css"
import Quiz from './pages/Quiz/QuizFinal'
import Quiz2 from './pages/Quiz/Quiz2'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import Profile from "./pages/profile/ProfileDefinitivo"
import Logros from "./pages/profile/Logros"
class App extends React.Component {
  render() {
    return (
      <div className="canvas">
        <Particles />
      </div>,
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/MainPlay" component={mainPlay} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Quiz" component={Quiz} />
          <Route exact path="/Quiz2" component={Quiz2} />
          <Route exact path="/Leaderboard" component={Leaderboard} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Logros" component={Logros}/>
          <Route exact path="/Comentario" component={Box}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
