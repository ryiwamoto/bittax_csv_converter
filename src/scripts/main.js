import { Provider } from 'preact-redux';
import { h, render } from "preact";
import App from "./components/app";
import store from "./modules/store";

const elem = document.getElementById("app");
elem.innerHTML = "";
render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    elem,
);
