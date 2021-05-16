import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from './redusers/postReducer';

const rootreducer = combineReducers({ post: postReducer });

export default store = createStore(rootreducer, applyMiddleware(thunk));
