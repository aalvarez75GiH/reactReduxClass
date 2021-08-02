import { createStore } from "redux";
import { selectVideo } from "../reducers";

const store = createStore(selectVideo)

export default store