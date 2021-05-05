import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ConnectedIntlProvider from "./components/IntlProvider/ConnectedIntlProvider";
import App from "./containers/App";
import store, { persistor } from "./config/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="Loading" persistor={persistor}>
        <ConnectedIntlProvider>
          <App />
        </ConnectedIntlProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
