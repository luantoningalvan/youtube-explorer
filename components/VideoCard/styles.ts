import styled from 'styled-components'

export const VideoCardContainer = styled.header`
border-radius: 8px;
background: rgba(0,0,0,0.3);
box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
cursor: pointer;

h2 {
    font-size: 1.4em;
    color: white;
}

span {
    color: #ccc;
}

.thumbnail {
    img {
        width: 100%;
        border-radius: 8px 8px 0px 0px;
    }
}

.video-content {
    padding: 16px;
}
`