import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Count from "./Count";
import Input from "./Input";
import Checked from "./Checked";
import FormSubmit from "./FormSubmit";
import "./App.css";
import Dropdown from "./Dropdown";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Header />
    <Footer />
    <Input />
    <Count />
    <div className="form_content">
      <Checked />
      <FormSubmit />
    </div>
    <Dropdown />
  </>
);
