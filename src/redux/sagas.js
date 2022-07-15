import { all } from 'redux-saga/effects';
import { saga as authSagas } from './auth';
import { saga as createUser } from './createUser';
import { saga as exerciseProgram } from './exerciseProgram';
import { saga as shippingAddress } from './shippingAddress';
import { saga as basicInFormation } from './basicInFormation';
import { saga as update } from './update';
import { saga as get } from './get';
import { saga as exerciseVideos } from './exerciseVideos';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    createUser(),
    exerciseProgram(),
    shippingAddress(),
    basicInFormation(),
    update(),
    get(),
    exerciseVideos()
  ]);
}
