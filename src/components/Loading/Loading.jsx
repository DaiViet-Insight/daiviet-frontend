import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';
const Loading = ({ type, color }) => (
    <div class = "fullscreenOverlayStyles">
    <ReactLoading type="spinningBubbles" color="#B8DDCC" height={100} width={100} />
    </div>
);
 
export default Loading;