import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  CREATE_CUSTOM_WEEK_FOR_USER: "CREATE_CUSTOM_WEEK_FOR_USER",
  CREATE_CUSTOM_WEEK_FOR_USER_SUCCESS: "CREATE_CUSTOM_WEEK_FOR_USER_SUCCESS",
  VIDEO_LIST_FOR_USER: "VIDEO_LIST_FOR_USER",
  VIDEO_LIST_FOR_USER_SUCCESS: "VIDEO_LIST_FOR_USER_SUCCESS",
  VIDEO_LIST_FOR_USER_FAIL: "VIDEO_LIST_FOR_USER_FAIL",
  GET_WEEK: "GET_WEEK",
  CREATE_WEEKLY_STAYFIT_PROGRAM: "CREATE_WEEKLY_STAYFIT_PROGRAM",
  CREATE_WEEKLY_STAYFIT_PROGRAM_SUCCESS: "CREATE_WEEKLY_STAYFIT_PROGRAM_SUCCESS",
  UPDATE_PLAYTIME: "UPDATE_PLAYTIME",
  UPDATE_PLAYTIME_SUCCESS: "UPDATE_PLAYTIME_SUCCESS",
}

export const updatePlaytime = (user_id, start_date, expire_date, day_number, video_number, play_time, duration, exerciseVideo) => ({
  type: types.UPDATE_PLAYTIME,
  payload: {
    user_id,
    start_date,
    expire_date,
    day_number,
    video_number,
    play_time,
    duration,
    exerciseVideo
  }
})

export const createWeeklyStayfitProgram = (
  user_id,
  start_date,
  expire_date
) => ({
  type: types.CREATE_WEEKLY_STAYFIT_PROGRAM,
  payload: {
    user_id,
    start_date,
    expire_date
  }
});

export const videoListForUser = (
  user_id,
  weight,
  start_date,
  expire_date,
  offset) => ({
    type: types.VIDEO_LIST_FOR_USER,
    payload: {
      user_id,
      weight,
      start_date,
      expire_date,
      offset
    }
  });


/* END OF ACTION Section */

const videoListForUserSagaAsync = async (
  user_id,
  weight,
  start_date,
  expire_date,
  offset
) => {
  try {
    const apiResult = await API.get("bebe", "/videoListForUser", {
      queryStringParameters: {
        user_id,
        weight,
        start_date,
        expire_date,
        offset
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const updatePlaytimeSagaAsync = async (
  user_id,
  start_date,
  expire_date,
  day_number,
  video_number,
  play_time,
  duration
) => {
  try {
    const apiResult = await API.put("bebe", "/play_time", {
      body: {
        user_id,
        start_date,
        expire_date,
        day_number,
        video_number,
        play_time,
        duration
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const createWeeklyStayfitProgramSagaAsync = async (
  user_id,
  start_date,
  expire_date
) => {
  try {
    const apiResult = await API.post("bebe", "/createWeeklyStayfitProgram", {
      body: {
        user_id,
        start_date,
        expire_date
      }
    });

    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* updatePlaytimeSaga({ payload }) {
  const {
    user_id,
    start_date,
    expire_date,
    day_number,
    video_number,
    play_time,
    duration,
    exerciseVideo
  } = payload
  try {
    const apiResult = yield call(
      updatePlaytimeSagaAsync,
      user_id,
      start_date,
      expire_date,
      day_number,
      video_number,
      play_time,
      duration
    );
    let keyDay = "";
    switch (day_number) {
      case 0:
        keyDay = "day1";
        break;
      case 1:
        keyDay = "day2";
        break;
      case 2:
        keyDay = "day3";
        break;
      case 3:
        keyDay = "day4";
        break;
      default:
        break;
    }
    yield put({
      type: types.UPDATE_PLAYTIME_SUCCESS,
      payload: exerciseVideo
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* videoListForUserSaga({ payload }) {
  const {
    user_id,
    weight,
    start_date,
    expire_date,
    offset
  } = payload
  try {
    const apiResult = yield call(
      videoListForUserSagaAsync,
      user_id,
      weight,
      start_date,
      expire_date,
      offset
    );
    if (apiResult.results.length > 0) {
      const activities = JSON.parse(apiResult.results[0].activities);
      const week = JSON.parse(apiResult.results[0].week_in_program);
      yield put({
        type: types.VIDEO_LIST_FOR_USER_SUCCESS,
        payload: activities
      })
      yield put({
        type: types.GET_WEEK,
        payload: week
      })
    } else if (apiResult.results.message === 'no_video') {
      yield put({
        type: types.VIDEO_LIST_FOR_USER_FAIL
      })
    }
  } catch (error) {
    console.log("error form videoListForUserSaga", error);
  }
}

function* createWeeklyStayfitProgramSaga({ payload }) {
  const {
    user_id,
    start_date,
    expire_date
  } = payload

  try {
    yield call(
      createWeeklyStayfitProgramSagaAsync,
      user_id,
      start_date,
      expire_date
    );
    yield put({
      type: types.CREATE_WEEKLY_STAYFIT_PROGRAM_SUCCESS
    })
  } catch (error) {
    console.log("error from createWeeklyStayfitProgramSaga :", error);
  }
}

/* SAGA Section */


export function* watchVideoListForUser() {
  yield takeEvery(types.VIDEO_LIST_FOR_USER, videoListForUserSaga)
}

export function* watchCreateWeeklyStayfitProgram() {
  yield takeEvery(types.CREATE_WEEKLY_STAYFIT_PROGRAM, createWeeklyStayfitProgramSaga)
}

export function* watchUpdatePlaytime() {
  yield takeEvery(types.UPDATE_PLAYTIME, updatePlaytimeSaga)
}

export function* saga() {
  yield all([
    fork(watchVideoListForUser),
    fork(watchCreateWeeklyStayfitProgram),
    fork(watchUpdatePlaytime),
  ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  exerciseVideo: [[], [], [], []],
  week: 0,
  statusVideoList: "default"
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.CREATE_WEEKLY_STAYFIT_PROGRAM_SUCCESS:
      return {
        ...state,
        statusVideoList: "default"
      }
    case types.VIDEO_LIST_FOR_USER_SUCCESS:
      return {
        ...state,
        exerciseVideo: action.payload
      };
    case types.VIDEO_LIST_FOR_USER_FAIL:
      return {
        ...state,
        statusVideoList: "no_video"
      }
    case types.GET_WEEK:
      return {
        ...state,
        week: action.payload
      };
    case types.UPDATE_PLAYTIME_SUCCESS:
      return {
        ...state,
        exerciseVideo: action.payload
      };
    default:
      return { ...state };
  }
}
