import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
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

};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
