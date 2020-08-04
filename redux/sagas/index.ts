import { all } from 'redux-saga/effects';

import VideoSagas from './videos';


export default function* rootSaga() {
  yield all([
    ...VideoSagas,

  ]);
}