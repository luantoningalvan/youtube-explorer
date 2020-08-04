export const Types = {
    GET_CHANNEL_VIDEOS_REQUEST: 'videos/get_channel_videos_request',
    GET_CHANNEL_VIDEOS_SUCCESS: 'videos/get_channel_videos_success',
    GET_SINGLE_VIDEO_REQUEST: 'videos/get_single_video_request',
    GET_SINGLE_VIDEO_SUCCESS: 'videos/get_single_video_success',
    VIDEOS_ERROR: 'videos/error',
  };
  
  export const getChannelVideosRequest = (data) => ({
    type: Types.GET_CHANNEL_VIDEOS_REQUEST,
    payload: data,
  });
  
  export const getChannelVideosSuccess = (data) => ({
    type: Types.GET_CHANNEL_VIDEOS_SUCCESS,
    payload: data,
  });
  
  export const getSingleVideoRequest = (data) => ({
    type: Types.GET_SINGLE_VIDEO_REQUEST,
    payload: data,
  });

  export const getSingleVideoSuccess = (data) => ({
    type: Types.GET_SINGLE_VIDEO_SUCCESS,
    payload: data,
  });

  export const videosError = (data) => ({
    type: Types.VIDEOS_ERROR,
    payload: data,
  });
 
 