import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import { reducer as authUser} from './auth';
import { reducer as createUser} from './createUser';
import { reducer as exerciseProgram} from './exerciseProgram';
import { reducer as shippingAddress} from './shippingAddress';


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
};

const reducers = combineReducers({
  authUser,
  createUser,
  exerciseProgram,
  shippingAddress
});

const persistedReducer = persistReducer(persistConfig, reducers)

export default persistedReducer;