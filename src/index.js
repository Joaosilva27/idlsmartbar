import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (module.hot && !module.hot._main) {
  // TODO: get <Loading /> to work if <App /> not fully rendered
  root.render(<Loading />);
} else {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
