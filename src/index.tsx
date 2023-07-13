import React from "react";
import ReactDOM from "react-dom/client";
import App from "./lib/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App
      images={
        [
          // <img src="https://media4.giphy.com/media/HDaBrYcECrDzR8OBmh/giphy.gif?cid=ecf05e471345wf16qp2wt0ed7lztzismwe3lyn979d1monjp&ep=v1_gifs_search&rid=giphy.gif&ct=g" />,
          // <img src="https://media4.giphy.com/media/3o7abJxL1w984uW2AM/giphy.gif?cid=ecf05e471345wf16qp2wt0ed7lztzismwe3lyn979d1monjp&ep=v1_gifs_search&rid=giphy.gif&ct=g" />,
          // <img src="https://media2.giphy.com/media/xTka00xv2CNa6FzFaU/giphy.gif?cid=ecf05e471345wf16qp2wt0ed7lztzismwe3lyn979d1monjp&ep=v1_gifs_search&rid=giphy.gif&ct=g" />,
        ]
      }
    />
  </React.StrictMode>
);
