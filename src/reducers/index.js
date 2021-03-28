import { combineReducers } from 'redux';

import votes from './votes';
import auth from './auth';

export default combineReducers({ votes, auth });