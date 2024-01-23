import React from "react";
import './DownVoteButton.css';

const DownVoteButton = ({idPost, props, downVote}) => {
    let strokeColor = "#000";
    let hoverBackColor = "#ebebeb";
    if (props) {
        strokeColor = props.strokeColor || "#000";
        hoverBackColor = props.hoverBackColor || "#ebebeb";
    }

    return (
        <button 
            className="downVoteButton" 
            style={
                {
                    "--downVoteButton-color": strokeColor,
                    "--downVoteButton-hover-color": hoverBackColor,
                }
            } 
            onClick={() => downVote(idPost)}
        >
            <svg id="eCZbY84NLMA1" className="downVoteButton-icon" viewBox="-150 -150 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                <line x1="75" y1="75" x2="-75" y2="-75" transform="translate(-75 75)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="-75" y1="75" x2="75" y2="-75" transform="translate(75 75)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="-50.035575" y1="0" x2="50.035576" y2="0" transform="translate(-99.964424 0)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="-50.106229" y1="0" x2="50.106229" y2="0" transform="translate(99.893771 0)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="0" y1="-75" x2="0" y2="76.5" transform="translate(-49.928848-75)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="0" y1="-75" x2="0" y2="76.5" transform="translate(49.787542-75)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="-49.858195" y1="0" x2="52.741805" y2="0" transform="translate(-1.641805-148.5)" fill="none" stroke={strokeColor} strokeWidth="3"/>
            </svg>
        </button>
    );
}

export default DownVoteButton;