import { Types } from '../actions/videos'
const INITIAL_STATE = {
    channelVideos: [],
    video: null,
    loadingChannel: true,
    loadingVideo: true,
    error: null,
}

function videos(state = INITIAL_STATE, action) {
    const { type, payload } = action;
  
    switch (type) {
      case Types.GET_CHANNEL_VIDEOS_REQUEST:
        return { ...state, loadingChannel: true}
      case Types.GET_SINGLE_VIDEO_REQUEST:
        return { ...state, loadingVideo: true };
      case Types.GET_CHANNEL_VIDEOS_SUCCESS:
        return {
          ...state,
          channelVideos: payload,
          loadingChannel: false,
        };
      case Types.GET_SINGLE_VIDEO_SUCCESS:
        return { ...state, video: payload, loadingVideo: false };
      case Types.VIDEOS_ERROR:
        return { ...state, error: payload.errorMessage };
      default:
        return state;
    }
  }
  
  export default videos;