import { useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import VideoCard from "../components/VideoCard";
import { getChannelVideosRequest } from "../redux/actions/videos";

import { connect} from "react-redux";
import { bindActionCreators } from "redux";

interface IVideo {
  id: {
    videoId: string
  },
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url:string;
      },
    },
  }
}

interface IndexProps{
  videos: {
    channelVideos: IVideo[],
    video: {
      id: string;
      title:string;
      description: string;
    } | null
  },
  getChannelVideos(title: string): void
}

const Home: React.FC<IndexProps> = ({ videos, getChannelVideos }) => {
  const { channelVideos, video } = videos

  useEffect(() => {
    getChannelVideos("UCbTAwyq6nWOLnFag-PR0XVw");
  }, []);

  const ListVideos = () => (
    <>
      {channelVideos.map((video) => (
        <VideoCard video={video} />
      ))}
    </>
  );

  return (
    <div>
      <Head>
        <title>Iutubi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main
        style={{
          margin: "16px 0px",
          padding: "0px 24px",
          display: "flex",
          width: '100%',
        }}
      >
        <section style={{flex: 1}}>
          {video !== null ? (
            <div>
              <VideoPlayer video={video.id} style={{ flex: 1 }} />
              <h3 style={{color: "white", marginTop: 16, fontSize: '2em' }}>{video.title}</h3>
              <p style={{color: "#ccc",  marginTop: 8}}>{video.description}</p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
              }}
            >
              <ListVideos />
            </div>
          )}
        </section>

        {video !== null && (
          <aside
            style={{
              display: "grid",
              width: 340,
              gridTemplateRows: "1fr",
              gap: 16,
              marginLeft: 16,
            }}
          >
            <ListVideos />
          </aside>
        )}
      </main>
    </div>
  );
}

const mapStateToProps = state => ({ videos: state.videos })
const mapDispatchToProps = dispatch => bindActionCreators({ getChannelVideos: getChannelVideosRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)