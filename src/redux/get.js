import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  GET_SUBSCRIPTION_PRODUCTS: "GET_SUBSCRIPTION_PRODUCTS",
  GET_SUBSCRIPTION_PRODUCTS_SUCCESS: "GET_SUBSCRIPTION_PRODUCTS_SUCCESS",
}

export const getSubscriptionProducts = (user_id) => ({
  type: types.GET_SUBSCRIPTION_PRODUCTS,
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

export function* watchGetSubscriptionProducts() {
  yield takeEvery(types.GET_SUBSCRIPTION_PRODUCTS, getSubscriptionProductsSaga)
}

export function* saga() {
  yield all([
    fork(watchGetSubscriptionProducts),
  ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  delivery_address: null,
  products_list: null
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.GET_SUBSCRIPTION_PRODUCTS_SUCCESS:
      return {
        ...state,
        delivery_address: action.payload.delivery_address,
        products_list: action.payload.products_list
      }
    default:
      return { ...state };
  }
}