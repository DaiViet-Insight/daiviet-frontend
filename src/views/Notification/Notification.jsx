import React from "react";
import { Link } from "react-router-dom";
import './Notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const notifications = [
    {
        id: 1,
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        title: "u/Tuan Tran upvoted your post",
        time: "1 day ago",
        content: "Taking into account the difficulties of creating AI tools comparable to ChatGPT acknowledged in this post, it seems urgent to mention Muah AI. Believe it or not, it's free, integrates seamlessly with interactive technologies compared to others, considering its uncensored chat feature, voice commands and authentic photo rendering are the prime highlights."
    },
    {
        id: 2,
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        title: "u/Tuan Tran upvoted your post",
        time: "1 day ago",
        content: "Taking into account the difficulties of creating AI tools comparable to ChatGPT acknowledged in this post, it seems urgent to mention Muah AI. Believe it or not, it's free, integrates seamlessly with interactive technologies compared to others, considering its uncensored chat feature, voice commands and authentic photo rendering are the prime highlights."
    },
    {
        id: 3,
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        title: "u/Tuan Tran upvoted your post",
        time: "1 day ago",
        content: "Taking into account the difficulties of creating AI tools comparable to ChatGPT acknowledged in this post, it seems urgent to mention Muah AI. Believe it or not, it's free, integrates seamlessly with interactive technologies compared to others, considering its uncensored chat feature, voice commands and authentic photo rendering are the prime highlights."
    }
];

const Notification = () => {
    return (
        <div className="notification">
            <div className="notification__header">
                <h1 className="notification__header-title">Notification</h1>
                <Link to="/settings" className="notification__header-link">
                    <FontAwesomeIcon icon={faGear} />
                    <span>Settings</span>
                </Link>
            </div>
            <div className="notification__list">
                {
                    notifications.length > 0 ? notifications.map((notification) => (
                        <div className="notification__item" key={notification.id}>
                            <div className="notification__item-avatar">
                                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
                            </div>
                        <div className="notification__item-body">
                            <div className="notification__item-body__top">
                                <h3 className="notification__item-body-title">{notification.title}</h3>
                                <p className="notification__item-body-time">{notification.time}</p>
                            </div>
                            <div className="notification__item-body__bottom">
                                <p className="notification__item-body-content">{notification.content}</p>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="notification__empty">
                        <h3 className="notification__empty-title">No new notifications</h3>
                        <p className="notification__empty-text">You will see notifications about upvotes, replies, and mentions.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Notification;