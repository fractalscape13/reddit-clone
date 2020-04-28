import postListReducer from './post-list-reducer';
import masterPostList from '../components/InitialState'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterPostList: postListReducer
});

export default rootReducer;