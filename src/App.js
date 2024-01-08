import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MuiMap from "./MuiMap";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MuiCard from "./MuiCard";
import Cart from "./Cart";
import { CounterContext } from "./CounterContext";
import Navbar from "./Navbar";
import ViewDetail from "./ViewDetail";

const App = () => {
  const [passData, setPassData] = useState([]);
  const [updateCart, setUpdateCart] = useState([]);

  const handleAdd = (data) => {
    let late = false;
    let ar = JSON.parse(localStorage.getItem("updateCart"));
    data.quantity = 1;
    if (ar != null) {
      ar.map((hap) => {
        if (data.id === hap.id) {
            late = true;
        }
      });
      if (late !== true) {
        ar.push(data);
        localStorage.setItem(
          "updateCart",
          JSON.stringify([...updateCart, data])
        );
        setUpdateCart(ar);
      }
    } else {
      ar = [data];
      setUpdateCart(ar);
    }
    localStorage.setItem("updateCart", JSON.stringify(ar));
  };

  return (
    <div>
      <CounterContext.Provider value={{ updateCart, setUpdateCart, handleAdd }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<MuiMap />} />
            <Route
              exact
              path="/:params"
              element={<MuiCard setPassData={setPassData} />}
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route
              exact
              path="/:params/:id"
              element={<ViewDetail passData={passData} />}
            />
          </Routes>
        </BrowserRouter>
      </CounterContext.Provider>
    </div>
  );
};

export default App;
