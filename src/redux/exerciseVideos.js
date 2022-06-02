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
  RANDOM_VIDEO: "RANDOM_VIDEO",
  RANDOM_VIDEO_SUCCESS: "RANDOM_VIDEO_SUCCESS",
  RANDOM_VIDEO_FAIL: "RANDOM_VIDEO_FAIL",
  SELECT_CHANGE_VIDEO: "SELECT_CHANGE_VIDEO",
  SELECT_CHANGE_VIDEO_SUCCESS: "SELECT_CHANGE_VIDEO_SUCCESS",
  SELECT_CHANGE_VIDEO_FAIL: "SELECT_CHANGE_VIDEO_FAIL",
  UPDATE_PLAYLIST: "UPDATE_PLAYLIST",
  UPDATE_PLAYLIST_SUCCESS: "UPDATE_PLAYLIST_SUCCESS",
}

export const updatePlaylist = (user_id, start_date, day_number, playlist, exerciseVideo) => ({
  type: types.UPDATE_PLAYLIST,
  payload: {
    user_id,
    start_date,
    day_number,
    playlist,
    exerciseVideo
  }
})

export const selectChangeVideo = (video_id, category, type) => ({
  type: types.SELECT_CHANGE_VIDEO,
  payload: {
    video_id,
    category,
    type
  }
})

export const randomVideo = (video_id, category, type) => ({
  type: types.RANDOM_VIDEO,
  payload: {
    video_id,
    category,
    type
  }
})

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

const updatePlaylistSagaAsync = async (
  user_id,
  start_date,
  day_number,
  playlist
) => {
  try {
    const apiResult = await API.put("bebe", "/playlist", {
      body: {
        user_id,
        start_date,
        day_number,
        playlist
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const selectChangeVideoSagaAsync = async (
  video_id,
  category,
  type
) => {
  try {
    const apiResult = await API.get("bebe", "/selectChangeVideo", {
      queryStringParameters: {
        video_id,
        category,
        type
      }
    });
    return apiResult;
  } catch (error) {

  }
}

const randomVideoSagaAsync = async (
  video_id,
  category,
  type
) => {
  try {
    const apiResult = await API.get("bebe", "/randomVideo", {
      queryStringParameters: {
        video_id,
        category,
        type
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

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

function* randomVideoSaga({ payload }) {
  const {
    video_id,
    category,
    type
  } = payload
  try {
    const apiResult = yield call(
      randomVideoSagaAsync,
      video_id,
      category,
      type
    );
    if (apiResult.results.message === "no_video") {
      console.log("user :", apiResult.results);
      yield put({
        type: types.RANDOM_VIDEO_FAIL,
      })
    } else {
      yield put({
        type: types.RANDOM_VIDEO_SUCCESS,
        payload: apiResult.results.video
      })
    }
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* updatePlaylistSaga({ payload }) {
  const {
    user_id,
    start_date,
    day_number,
    playlist,
    exerciseVideo
  } = payload
  try {
    const apiResult = yield call(
      updatePlaylistSagaAsync,
      user_id,
      start_date,
      day_number,
      playlist
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
      type: types.UPDATE_PLAYLIST_SUCCESS,
      payload: exerciseVideo
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* selectChangeVideoSaga({ payload }) {
  const {
    video_id,
    category,
    type
  } = payload
  try {
    const apiResult = yield call(
      selectChangeVideoSagaAsync,
      video_id,
      category,
      type
    );
    if (apiResult.results.message === "no_video") {
      yield put({
        type: types.SELECT_CHANGE_VIDEO_FAIL
      })
    } else {
      yield put({
        type: types.SELECT_CHANGE_VIDEO_SUCCESS,
        payload: apiResult.results.videos
      })
    }
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

export function* watchRandomVideo() {
  yield takeEvery(types.RANDOM_VIDEO, randomVideoSaga)
}

export function* watchSelectChangeVideo() {
  yield takeEvery(types.SELECT_CHANGE_VIDEO, selectChangeVideoSaga)
}

export function* watchUpdatePlaylist() {
  yield takeEvery(types.UPDATE_PLAYLIST, updatePlaylistSaga)
}

export function* saga() {
  yield all([
    fork(watchVideoListForUser),
    fork(watchCreateWeeklyStayfitProgram),
    fork(watchUpdatePlaytime),
    fork(watchRandomVideo),
    fork(watchSelectChangeVideo),
    fork(watchUpdatePlaylist),
  ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  exerciseVideo: [[], [], [], []],
  week: 0,
  statusVideoList: "default",
  video: {},
  videos: [],
  status: "default",
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.UPDATE_PLAYLIST_SUCCESS:
      return {
        ...state,
        exerciseVideo: action.payload,
        status: "success"
      };
    case types.UPDATE_PLAYLIST:
      return {
        ...state,
        status: "processing"
      };
    case types.SELECT_CHANGE_VIDEO_SUCCESS:
      return {
        ...state,
        videos: action.payload
      };
    case types.RANDOM_VIDEO_SUCCESS:
      return {
        ...state,
        video: action.payload
      };
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
