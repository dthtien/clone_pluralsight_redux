import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';


export default function configureStore(initialState){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}