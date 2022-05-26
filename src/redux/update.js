import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  CLEAR_PROGRAM: "CLEAR_PROGRAM",
  CREATE_USER: "CREATE_USER",
  UPDATE_PROFILE: "UPDATE_PROFILE",
  UPDATE_PROFILE_SUCCESS: "UPDATE_PROFILE_SUCCESS",
}

export const updateProfile = (
  user_id,
  other_attributes,
  start_date,
  program_id
) => ({
  type: types.UPDATE_PROFILE,
  payload: {
    user_id,
    other_attributes,
    start_date,
    program_id
  }
})

export const clearProgram = () => ({
  type: types.CLEAR_PROGRAM
})

export const createUser = (email, password, phone) => ({
  type: types.CREATE_USER,
  payload: {
    email,
    password,
    phone
  }
})

/* END OF ACTION Section */

const updateProfileSagaAsync = async (
  user_id,
  other_attributes,
  start_date,
  program_id
) => {
  try {
    const apiResult = await API.post("bebe", "/updateStayFitProfile", {
      body: {
        user_id,
        other_attributes,
        start_date,
        program_id
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* updateProfileSaga({ payload }) {
  const {
    user_id,
    other_attributes,
    start_date,
    program_id
  } = payload

  try {
    const apiResult = yield call(
      updateProfileSagaAsync,
      user_id,
      other_attributes,
      start_date,
      program_id
    );
    yield put({
      type: types.UPDATE_PROFILE_SUCCESS
    })
  } catch (error) {
    console.log("error from updateProfileSaga :", error);
  }
}

/* SAGA Section */


export function* watchUpdateProfile() {
  yield takeEvery(types.UPDATE_PROFILE, updateProfileSaga)
}

export function* saga() {
  yield all([
    fork(watchUpdateProfile),
  ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  create_user_email: null,
  create_user_password: null,
  create_user_phone: null,
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.CLEAR_PROGRAM:
      return INIT_STATE;
    case types.CREATE_USER:
      return {
        ...state,
        create_user_email: action.payload.email,
        create_user_password: action.payload.password,
        create_user_phone: action.payload.phone
      };
    default:
      return { ...state };
  }
}
