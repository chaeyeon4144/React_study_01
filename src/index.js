import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Count from "./Count";
import Input from "./Input";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Header />
    <Footer />
    <Input />
    <Count />
  </>
);
