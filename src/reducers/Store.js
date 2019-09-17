import { createStore, combineReducers } from "redux";
import undoRedoHandler from "./reducer";

const rootReducers = combineReducers({
  undoRedoHandler
});
const store = createStore(rootReducers);

export default store;
