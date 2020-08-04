import React, { useState } from "react";
import { HeaderContainer } from "./styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getChannelVideosRequest } from "../../redux/actions/videos";
import SearchIcon from '../../assets/icons/search.svg';

const Header = ({ getChannelVideos }) => {
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault;
    getChannelVideos(term);
  };

  return (
    <HeaderContainer>
      <h1>YTExp</h1>

      <form onSubmit={handleSearch}>
        <SearchIcon />
        <input
          placeholder="Buscar pelo ID de um canal"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getChannelVideos: getChannelVideosRequest }, dispatch);

export default connect(null, mapDispatchToProps)(Header);
