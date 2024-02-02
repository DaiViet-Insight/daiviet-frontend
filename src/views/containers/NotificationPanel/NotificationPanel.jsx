import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './NotificationPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { useUser } from "../../../contexts/UserContext";

// const notifications = [
//     {
//         id: 1,
//         avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//         title: "u/Tuan Tran upvoted your post",
//         time: "1 day ago",
//         content: "Taking into account the difficulties of creating AI tools comparable to ChatGPT acknowledged in this post, it seems urgent to mention Muah AI. Believe it or not, it's free, integrates seamlessly with interactive technologies compared to others, considering its uncensored chat feature, voice commands and authentic photo rendering are the prime highlights."
//     },
//     {
//         id: 2,
//         avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//         title: "u/Tuan Tran upvoted your post",
//         time: "1 day ago",
//         content: "Taking into account the difficulties of creating AI tools comparable to ChatGPT acknowledged in this post, it seems urgent to mention Muah AI. Believe it or not, it's free, integrates seamlessly with interactive technologies compared to others, considering its uncensored chat feature, voice commands and authentic photo rendering are the prime highlights."
//     },
//     {
//         id: 3,
//         avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//         title: "u/Tuan Tran upvoted your post",
//         time: "1 day ago",
//         content: "Taking into account the difficulties of creating AI tools comparable to ChatGPT acknowledged in this post, it seems urgent to mention Muah AI. Believe it or not, it's free, integrates seamlessly with interactive technologies compared to others, considering its uncensored chat feature, voice commands and authentic photo rendering are the prime highlights."
//     },
//     {
//         id: 4,
//         avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//         title: "u/Tuan Tran upvoted your post",
//         time: "1 day ago",
//         content: "Taking into account the difficulties of creating AI tools comparable to ChatGPT acknowledged in this post, it seems urgent to mention Muah AI. Believe it or not, it's free, integrates seamlessly with interactive technologies compared to others, considering its uncensored chat feature, voice commands and authentic photo rendering are the prime highlights."
//     },
//     {
//         id: 5,
//         avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//         title: "u/Tuan Tran upvoted your post",
//         time: "1 day ago",
//         content: "Taking into account the difficulties of creating AI tools comparable to ChatGPT acknowledged in this post, it seems urgent to mention Muah AI. Believe it or not, it's free, integrates seamlessly with interactive technologies compared to others, considering its uncensored chat feature, voice commands and authentic photo rendering are the prime highlights."
//     }
// ];

const NotificationPanel = ({ isShow, clickEvent }) => {
    const { setIsShowAuthModal } = useUser();
    const [notifications, setNotifications] = React.useState([]);

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
    <div 
        className="notification-panel" style={
            {
                display: isShow ? "block" : "none"
            }
        }
    >
        <div className="notification-panel__header">
            <h2 className="notification-panel__header-title">Thông báo</h2>
            <Link to="/settings" className="notification-panel__header__link" onClick={clickEvent}>
                <FontAwesomeIcon icon={faGear} />
            </Link>
        </div>
        <div className="notification-panel__content">
            <div className="notification-panel__content__collection">
                {
                    notifications.length > 0 ? notifications.map((notification) => (
                        <Link to={`/posts/${notification.postId}/comments`} key={notification.id} onClick={clickEvent}>
                            <div className="notification-panel__content__item" key={notification.id}>
                            <div className="notification-panel__content__item-avatar">
                                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
                            </div>
                        <div className="notification-panel__content__item-body">
                            <div className="notification-panel__content__item-body__top">
                                <h3 className="notification-panel__content__item-body-title">{notification.title}</h3>
                                <span className="notification-panel__content__item-body-time">{notification.time}</span>
                            </div>
                            <div className="notification-panel__content__item-body__bottom">
                                <p className="notification-panel__content__item-body-content">{notification.content}</p>
                            </div>
                        </div>
                        </div>
                    </Link>
                )) : (
                    <div className="notification-panel__content__no-collection">
                        <p className="notification-panel__content__no-collection-text">There are no notifications</p>
                    </div>
                )}
            </div>
        </div>
        <div className="notification-panel__footer">
            <Link to="/profile/tuanne/notifications" className="notification-panel__footer__link" onClick={clickEvent}>Xem tất cả</Link>
        </div>
    </div>
);
}

export default NotificationPanel;