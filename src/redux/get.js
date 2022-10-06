import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  GET_SUBSCRIPTION_PRODUCTS: "GET_SUBSCRIPTION_PRODUCTS",
  GET_SUBSCRIPTION_PRODUCTS_SUCCESS: "GET_SUBSCRIPTION_PRODUCTS_SUCCESS",
  GET_REGISTER_LOG: "GET_REGISTER_LOG",
  GET_REGISTER_LOG_SUCCESS: "GET_REGISTER_LOG_SUCCESS",
  GET_ALL_MEMBER_STAY_FIT: "GET_ALL_MEMBER_STAY_FIT",
  GET_ALL_MEMBER_STAY_FIT_SUCCESS: "GET_ALL_MEMBER_STAY_FIT_SUCCESS",
}

export const getAllMemberStayFit = () => ({
  type: types.GET_ALL_MEMBER_STAY_FIT
})

export const getSubscriptionProducts = (user_id) => ({
  type: types.GET_SUBSCRIPTION_PRODUCTS,
  payload: {
    user_id
  }
})
export const getRegister_log = (user_id) => ({
  type: types.GET_REGISTER_LOG,
  payload: {
    user_id
  }
})

/* END OF ACTION Section */

/* SAGA Section */

const getSubscriptionProductsSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getSubscriptionProducts", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}
const getRegister_logSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getRegister_log", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}
const getAllMemberStayFitSagaAsync = async (
  
) => {
  try {
    const apiResult = await API.get("bebe", "/getAllMemberStayFit", {
      queryStringParameters: {
        
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}


function* getSubscriptionProductsSaga({ payload }) {
  const {
    user_id
  } = payload

  try {
    const apiResult = yield call(
      getSubscriptionProductsSagaAsync,
      user_id
    );
    yield put({
      type: types.GET_SUBSCRIPTION_PRODUCTS_SUCCESS,
      payload: apiResult.results
    })
    console.log("apiResult :", apiResult);
  } catch (error) {
    console.log("error from getSubscriptionProductsSaga :", error);
  }
}

function* getRegister_logSaga({ payload }) {
  const {
    user_id
  } = payload

  try {
    const apiResult = yield call(
      getRegister_logSagaAsync,
      user_id
    );
    yield put({
      type: types.GET_REGISTER_LOG_SUCCESS,
      payload: apiResult.results
    })
    console.log("apiResult :", apiResult);
  } catch (error) {
    console.log("error from getRegister_logSaga :", error);
  }
}
function* getAllMemberStayFitSaga({  }) {

  try {
    const apiResult = yield call(
      getAllMemberStayFitSagaAsync
    );
    yield put({
      type: types.GET_ALL_MEMBER_STAY_FIT_SUCCESS,
      payload: apiResult.results
    })
  } catch (error) {
    console.log("error from getAllMemberStayFitSaga :", error);
  }
}

export function* watchGetSubscriptionProducts() {
  yield takeEvery(types.GET_SUBSCRIPTION_PRODUCTS, getSubscriptionProductsSaga)
}
export function* watchGetRegister_logSaga() {
  yield takeEvery(types.GET_REGISTER_LOG, getRegister_logSaga)
}
export function* watchGetAllMemberStayFitSaga() {
  yield takeEvery(types.GET_ALL_MEMBER_STAY_FIT, getAllMemberStayFitSaga)
}

export function* saga() {
  yield all([
    fork(watchGetSubscriptionProducts),
    fork(watchGetRegister_logSaga),
    fork(watchGetAllMemberStayFitSaga),
  ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  delivery_address: null,
  products_list: null,
  register_log: null,
  allMemberStayFit: null
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.GET_ALL_MEMBER_STAY_FIT_SUCCESS:
      return {
        ...state,
        allMemberStayFit: action.payload.allMemberStayFit
      }
    case types.GET_SUBSCRIPTION_PRODUCTS_SUCCESS:
      return {
        ...state,
        delivery_address: action.payload.delivery_address,
        products_list: action.payload.products_list
      }
    case types.GET_REGISTER_LOG_SUCCESS:
      return {
        ...state,
        register_log: action.payload.register_log,
      }
    default:
      return { ...state };
  }
}