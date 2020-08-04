import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
	position:relative;
	padding-bottom:56.25%;
	padding-top:30px;
	height:0;
	overflow:hidden;

	&:after {
		content: "Carregando",
		color: white
	}
	background: rgba(0,0,0,0.2);
		
	iframe, object, embed {
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
	}
`