import React from "react";
import './EventAttach.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const EventAttach = ({ event, onRemoveClick }) => {
    return (
        <div className="eventAttach">
            <span className="eventAttach__name">
                {event.name}
            </span>
            <button 
                className="eventAttach__btn"
                onClick={() => onRemoveClick(event.id)}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    );
}

export default EventAttach;