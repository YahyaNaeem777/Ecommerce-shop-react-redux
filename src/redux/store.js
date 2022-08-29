import { createStore } from "redux";

import rootReducer from "./reducers/main_reducer";

const store = createStore(rootReducer);

export default store;
