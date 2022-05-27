import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  
}




/* END OF ACTION Section */





/* SAGA Section */


export function* saga() {
  yield all([
    
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
