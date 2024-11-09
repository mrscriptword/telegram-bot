// /src/App.js
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// Mengimpor komponen-komponen halaman
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Friends from "./components/Friends";
import Earn from "./components/Earn";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/friends" component={Friends} />
        <Route path="/earn" component={Earn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
