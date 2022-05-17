import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  CLEAR_PROGRAM: "CLEAR_PROGRAM",
  CREATE_USER: "CREATE_USER",
}

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

/* SAGA Section */



export function* saga() {
  yield all([

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