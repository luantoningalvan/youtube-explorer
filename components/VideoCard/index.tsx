import React from "react";
import { VideoCardContainer } from "./styles";
import moment from "moment";
import { connect } from "react-redux";
import { getSingleVideoRequest } from '../../redux/actions/videos'
import { bindActionCreators } from 'redux';

moment.locale('pt')
const VideoCard = ({ video, getSingleVideo }) => {

  const handleSelectVideo = () => getSingleVideo({
    id: video.id.videoId,
    title: video.snippet.title,
    description: video.snippet.description,
  })

  return (
    <VideoCardContainer onClick={handleSelectVideo}>
      <div className="thumbnail">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>

      <div className="video-content">
        <h2>
          {video.snippet.title.length > 40
            ? `${video.snippet.title.substring(0, 40)}...`
            : video.snippet.title}
        </h2>
        <span>{moment(video.snippet.publishedAt).format("D/M/Y, dddd")}</span>
      </div>
    </VideoCardContainer>
  );
};


const mapDispatchToProps = dispatch => bindActionCreators({ getSingleVideo: getSingleVideoRequest }, dispatch);

export default connect(null, mapDispatchToProps)(VideoCard)
