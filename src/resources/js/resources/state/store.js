import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thank from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer,
  composeWithDevTools( applyMiddleware(thank))
);
export default store;

// import { applyMiddleware, createStore } from "redux";
// import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension"

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;