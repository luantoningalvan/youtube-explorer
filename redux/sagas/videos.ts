import { takeLatest, call, fork, put } from 'redux-saga/effects';

import * as actions from '../actions/videos';
import * as api from '../api';

function* getChannelVideos({ payload }) {
  try {
    const items = yield call(api.getChannelVideos, payload );
    yield put(actions.getChannelVideosSuccess(items.items));
  } catch (e) {
    yield put(actions.videosError({ errorMessage: e.message }));
  }
}

function* getSingleVideo(action) {
  try {
    console.log(action.payload)
    yield put(actions.getSingleVideoSuccess(action.payload));
  } catch (e) {
    yield put(actions.videosError({ errorMessage: e.message }));
  }
}

// Watchers
function* watchGetChannelVideosRequest() {
  yield takeLatest(actions.Types.GET_CHANNEL_VIDEOS_REQUEST, getChannelVideos);
}

function* watchGetSingleVideoRequest() {
  yield takeLatest(actions.Types.GET_SINGLE_VIDEO_REQUEST, getSingleVideo);
}

export default [
  fork(watchGetChannelVideosRequest),
  fork(watchGetSingleVideoRequest),
];