import "./styles.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarElement from "./Components/NavbarElement";
import Shop from "./Shop";

export default function App(props) {
  const [cartQnt, SetCartQnt] = useState(0);
  const [itemsQnt, SetItemsQnt] = useState({});

  const addQnt = (evt) => {
    SetCartQnt(cartQnt + 1);
    if (itemsQnt[evt.target.value]) {
      let obj = Object.assign({}, itemsQnt);
      obj[evt.target.value]++;
      SetItemsQnt(obj);
    } else {
      let obj = Object.assign({}, itemsQnt);
      obj[evt.target.value] = 1;
      SetItemsQnt({ ...obj });
    }
  };
  const subtrtQnt = (evt) => {
    if (itemsQnt[evt.target.value]) {
      SetCartQnt(cartQnt - 1);
      let obj = Object.assign({}, itemsQnt);
      obj[evt.target.value]--;
      SetItemsQnt(obj);
    }
  };
  const Home = () => (
    <div>
      <h1>Home Page</h1>
    </div>
  );

  return (
    <Router>
      <NavbarElement cartQnt={cartQnt} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/Shop"
          exact
          render={(props) => (
            <Shop
              itemsQnt={itemsQnt}
              subtrtQnt={(evt) => subtrtQnt(evt)}
              addQnt={(evt) => addQnt(evt)}
              {...props}
            />
          )}
        />
      </Switch>
    </Router>
  );
}
