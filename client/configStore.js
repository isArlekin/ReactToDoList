import {combineReducers, createStore} from "redux";
import noteReducer from "./reducers/notes";

export default function configStore(initialState) {
    const reducers = combineReducers({
        notes: noteReducer,
    });
    const store = createStore(reducers, initialState);

    if (module.hot) {
        module.hot.accept('./reducers/note', () => {
            const nextRootReducer = require('./reducers/notes');

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}