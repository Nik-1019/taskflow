import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// TODO: Samira Patel — wire Redux store once created (src/store).
// TODO: Add React Router <BrowserRouter> with app routes.
import App from "./App";

// TODO: import { store } from "./store"; wrap <Provider store={store}> around <App />.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
