import React from "react";
import './FollowEvent.css';

const FollowEvent = () => {
    return (
        <div className="follow-event">
            <div className="follow-event-container">
                <div className="follow-event__thumbnail">
                    <img src="https://cdnmedia.baotintuc.vn/Upload/3qVxwVtNEPp6Wp9kkF77g/files/2019/05/07/dienbien.jpg" className="follow-event__thumbnail-img" alt="thumbnail" />
                </div>
                <div className="follow-event__main">
                    <div className="follow-event__header">
                        <h2 className="follow-event__header-title">
                            Chiến thắng Điện Biên Phủ 1954 – Sự kiện mang giá trị và tầm vóc thời đại
                        </h2>
                        <div className="follow-event__header-timeline">
                            <span className="follow-event__header-timeline-start">1954</span>
                            <div className="follow-event__header-timeline-line"></div>
                            <span className="follow-event__header-timeline-end">1954</span>
                        </div>
                    </div>
                    <div className="follow-event__info">
                        <div className="follow-event__info-flex">
                            <div className="follow-event__info-member">
                                <span className="follow-event__info-member-value">40k</span>
                                <span className="follow-event__info-member-label">Thành viên</span>
                            </div>
                        </div>
                    </div>
                    <div className="follow-event__footer">
                        <div className="follow-event__footer-teacher">
                            
                        </div>
                        <div className="follow-event__footer-action">
                            <button className="follow-event__footer-action-btn">Theo dõi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FollowEvent;