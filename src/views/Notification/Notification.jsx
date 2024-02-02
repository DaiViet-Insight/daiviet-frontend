import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import { useUser } from "../../contexts/UserContext";

const Notification = () => {
    const { setIsShowAuthModal } = useUser();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://20.236.83.109:3000/api/notifications", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });

                if (response.status === 401) {
                    setIsShowAuthModal(true);
                    return;
                }

                if (response.status === 200) {

                    const data = await response.json();
                    const notifications = data.map((notification) => {
                        return {
                            id: notification.id,
                            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                            title: notification.title,
                            time: notification.createdAt,
                            content: notification.content,
                            postId: notification.postId,
                            commentId: notification.commentId
                        }
                    });
                    setNotifications(notifications);
                }
            }
            catch (error) {
                console.log("error", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="notification">
            <div className="notification__header">
                <h1 className="notification__header-title">Thông báo</h1>
                <Link to="/settings" className="notification__header-link">
                    <FontAwesomeIcon icon={faGear} />
                    <span>Cài đặt</span>
                </Link>
            </div>
            <div className="notification__list">
                {
                    notifications.length > 0 ? notifications.map((notification) => (
                        <Link to={`/posts/${notification.postId}/comments`} key={notification.id}>
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
                        </Link>
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