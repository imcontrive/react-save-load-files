import { createStore, combineReducers } from "redux";
import undoRedoHandler from "./reducer";
import { usedColours } from "./reducer";

const rootReducers = combineReducers({
  undoRedoHandler,
  usedColours
});
const store = createStore(rootReducers);

export default store;
