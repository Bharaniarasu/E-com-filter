import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { createStore } from "redux";
import data from "./components/data/data";
import { Provider } from "react-redux";

const initialData = {
  existingData: data,
  loading: false,
  query: "",
  err: ""
};

const getDataReducers = (state = initialData, action) => {
  switch (action.type) {
    case "UPDATE_QUERY":
      return {
        ...state,
        query: action.enteredQuery
      };
    case "UPDATE_DATA":
      return {
        ...state,
        existingData: action.updatedData
      };

    default:
      return { ...state };
  }
};
let store = createStore(getDataReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
