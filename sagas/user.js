import { all, fork, takeLatest, call, put, delay } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../reducers/user";
import Axios from "axios";

function loginAPI() {
  // Axios.post("/login");
} //비동기 처리하는 부분

function* login() {
  try {
    // yield call(loginAPI); //비동기 처리
    yield put({
      type: LOGIN_SUCCESS, //성공하면 이 상태를 처리
    });
  } catch (err) {
    //실패시 이 상태를 처리
    console.error(err);
    yield put({
      type: LOGIN_FAILURE,
      error: err,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login); //첫번 째 인자 값이 dispatch될 때 두 번째 인자 함수를 실행
}

function logoutAPI() {
  // Axios.post("/logout");
} //비동기 처리하는 부분

function* logout() {
  try {
    yield put({
      type: LOGOUT_SUCCESS, //성공하면 이 상태를 처리
    });
  } catch (err) {
    //실패시 이 상태를 처리
    console.error(err);
    yield put({
      type: LOGOUT_FAILURE,
      error: err,
    });
  }
}

function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout); //첫번 째 인자 값이 dispatch될 때 두 번째 인자 함수를 실행
}

function signUpAPI() {
  Axios.post("/singUp");
} //비동기 처리하는 부분

function* signUp() {
  try {
    yield delay(1000); //비동기 처리
    yield put({
      type: SIGN_UP_SUCCESS, //성공하면 이 상태를 처리
    });
  } catch (err) {
    //실패시 이 상태를 처리
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp); //첫번 째 인자 값이 dispatch될 때 두 번째 인자 함수를 실행
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSignUp)]);
}
