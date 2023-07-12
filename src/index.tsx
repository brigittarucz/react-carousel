import React from "react";
import ReactDOM from "react-dom/client";
import App from "./lib/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App images={[]} />
  </React.StrictMode>
);
