import React from "react";
import './UpVoteButton.css';

const UpVoteButton = ({idPost, props, upVote}) => {
    let strokeColor = "#000";
    let hoverBackColor = "#ebebeb";
    if (props) {
        strokeColor = props.strokeColor || "#000";
        hoverBackColor = props.hoverBackColor || "#ebebeb";
    }

    return (
        <button 
            className="upVoteButton" 
            style={
                {
                    "--upVoteButton-color": strokeColor,
                    "--upVoteButton-hover-color": hoverBackColor,
                }
            } 
            onClick={() => upVote(idPost)}
        >
            <svg id="eGPvT0cKItB1" className="upVoteButton-icon" viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                <line x1="-75" y1="75" x2="75" y2="-75" transform="translate(75 75)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="-75" y1="-75" x2="75" y2="75" transform="translate(225 75)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="-50.9842" y1="0" x2="50.255458" y2="0" transform="matrix(-1 0 0 1 50 150)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="-51.5" y1="0" x2="50.092894" y2="0" transform="translate(249.907107 150)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="0" y1="-76" x2="0" y2="76" transform="translate(99.739084 225)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="0" y1="-76" x2="0" y2="76" transform="translate(199.814214 225)" fill="none" stroke={strokeColor} strokeWidth="3"/>
                <line x1="-50.037565" y1="0" x2="50.037565" y2="0" transform="translate(149.777565 298.7)" fill="none" stroke={strokeColor} strokeWidth="3"/>
            </svg>
        </button>
    );
}

export default UpVoteButton;