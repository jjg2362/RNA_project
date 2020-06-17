import { all, takeLatest, put, fork, delay } from "redux-saga/effects";
import {
  LOAD_POST_LISTS_REQUEST,
  LOAD_POST_LISTS_SUCCESS,
  LOAD_POST_LISTS_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "../reducers/post";

function addPostAPI() {}

function* addPost(action) {
  try {
    yield put({
      type: ADD_POST_SUCCESS,
      newPost: action.newPost,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: ADD_POST_FAILURE,
      error: err,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function addCommentAPI() {}

function* addComment(action) {
  try {
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data.postId,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err,
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* loadPost(action) {
  try {
    yield put({
      type: LOAD_POST_SUCCESS,
      id: action.postId,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_POST_FAILURE,
      error: err,
    });
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* loadPostLists(action) {
  try {
    yield put({
      type: LOAD_POST_LISTS_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_POST_LISTS_FAILURE,
      error: err,
    });
  }
}

function* watchLoadPostLists() {
  yield takeLatest(LOAD_POST_LISTS_REQUEST, loadPostLists);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadPostLists),
    fork(watchLoadPost),
    fork(watchAddPost),
    fork(watchAddComment),
  ]);
}
