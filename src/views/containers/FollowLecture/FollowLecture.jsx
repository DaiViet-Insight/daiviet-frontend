import React from "react";
import './FollowLecture.css';

const FollowLecture = () => {
    return (
        <div className="follow-lecture">
            <div className="follow-lecture-container">
                <div className="follow-lecture__thumbnail">
                    <img src="https://cdnmedia.baotintuc.vn/Upload/3qVxwVtNEPp6Wp9kkF77g/files/2019/05/07/dienbien.jpg" className="follow-lecture__thumbnail-img" alt="thumbnail" />
                </div>
                <div className="follow-lecture__main">
                    <div className="follow-lecture__header">
                        <h2 className="follow-lecture__header-title">
                            Chiến thắng Điện Biên Phủ 1954 – Sự kiện mang giá trị và tầm vóc thời đại
                        </h2>
                        <div className="follow-lecture__header-timeline">
                            <span className="follow-lecture__header-timeline-start">1954</span>
                            <div className="follow-lecture__header-timeline-line"></div>
                            <span className="follow-lecture__header-timeline-end">1954</span>
                        </div>
                    </div>
                    <div className="follow-lecture__info">
                        <div className="follow-lecture__info-flex">
                            <div className="follow-lecture__info-member">
                                <span className="follow-lecture__info-member-value">40k</span>
                                <span className="follow-lecture__info-member-label">Members</span>
                            </div>
                            <div className="follow-lecture__info-teacher">
                                <div className="follow-lecture__info-teacher-name">Nguyễn Văn A</div>
                                <div className="follow-lecture__info-teacher-label">Teacher</div>
                            </div>
                        </div>
                    </div>
                    <div className="follow-lecture__footer">
                        <div className="follow-lecture__footer-teacher">
                            
                        </div>
                        <div className="follow-lecture__footer-action">
                            <button className="follow-lecture__footer-action-btn">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FollowLecture;