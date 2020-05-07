import { createStore } from 'redux';
import { Reducer, initialState} from './reducer'

export const ConfigureStore = ()=> {
    // redux store
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}