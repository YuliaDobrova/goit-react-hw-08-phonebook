import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<h2>...isloading</h2>} persistor={store.persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
