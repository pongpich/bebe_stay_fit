import { all } from 'redux-saga/effects';
import { saga as authSagas } from './auth';
import { saga as createUser } from './createUser';
import { saga as exerciseProgram } from './exerciseProgram';
import { saga as shippingAddress } from './shippingAddress';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    createUser(),
    exerciseProgram(),
    shippingAddress()
  ]);
}
