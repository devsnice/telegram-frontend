import { combineReducers } from 'redux';

import auth from '../components/containers/Auth/model/reducer';

const reducer = combineReducers({ auth });

export default reducer;
