import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  POST_SUBSCRIPTION_ADDRESS: "POST_SUBSCRIPTION_ADDRESS",
  POST_SUBSCRIPTION_ADDRESS_SUCCESS: "POST_SUBSCRIPTION_ADDRESS_SUCCESS",
}

export const putSubscriptionAddress = (user_id,data) => ({

    type: types.POST_SUBSCRIPTION_ADDRESS,
    payload: {
      user_id,
      data
    }
  })

  const putSubscriptionAddressSagaAsync = async (
    user_id,
    data
  ) => {
    try {
      const apiResult = await API.post("bebe", "/updateDeliveryAddress", {
        body: {
          user_id,
          data
        }
      });
      return apiResult
    } catch (error) {
      return { error, messsage: error.message };
    }
  }


  function* putSubscriptionAddressSaga({ payload }) {
    const {
      user_id,
      data
    } = payload
  
    try {
      const apiResult = yield call(
        putSubscriptionAddressSagaAsync,
        user_id,
        data
      );
      yield put({
        type: types.POST_SUBSCRIPTION_ADDRESS_SUCCESS,
        payload: apiResult.results
      })
      console.log("apiResult :", apiResult);
    } catch (error) {
      console.log("error from putSubscriptionAddressSaga :", error);
    }
  }

  export function* watchPutSubscriptionAddress() {
    yield takeEvery(types.POST_SUBSCRIPTION_ADDRESS, putSubscriptionAddressSaga)
  }

  export function* saga() {
    yield all([
      fork(watchPutSubscriptionAddress),
    ]);
  }

  const INIT_STATE = {
    Delivery_address: null
  };
  
  export function reducer(state = INIT_STATE, action) {
    switch (action.type) {
      case types.POST_SUBSCRIPTION_ADDRESS:
        return {
          ...state,
          Delivery_address: action.payload.Delivery_address,
        }
      default:
        return { ...state };
    }
  }