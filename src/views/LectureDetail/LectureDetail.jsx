import React from "react";
import { useParams, Link } from "react-router-dom";
import './LectureDetail.css'
import { RelatedLecture } from "../../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from "@fortawesome/free-solid-svg-icons";

const relatedLectures = [
    {
        id: 1,
        title: "Tóm tắt nhanh hành trình đi tìm con đường cứu nước của Nguyễn Ái Quốc",
        videoUrl: "https://www.youtube.com/embed/Qu3yMoQfWXI"
    },
    {
        id: 2,
        title: "Tóm tắt nhanh hành trình đi tìm con đường cứu nước của Nguyễn Ái Quốc",
        videoUrl: "https://www.youtube.com/embed/Qu3yMoQfWXI"
    },
    {
        id: 3,
        title: "Tóm tắt nhanh hành trình đi tìm con đường cứu nước của Nguyễn Ái Quốc",
        videoUrl: "https://www.youtube.com/embed/Qu3yMoQfWXI"
    }
];

const lectureDetail = {
    title: "Tóm tắt nhanh hành trình đi tìm con đường cứu nước của Nguyễn Ái Quốc",
    videoUrl: "https://www.youtube.com/embed/Qu3yMoQfWXI",
    content: "Đầu thế kỷ XX, Việt Nam đã có một lớp thanh niên ưu tú rời đất nước ra đi vì khát vọng giành lại độc lập cho Tổ quốc, tự do và phẩm giá cho đồng bào...Đầu thế kỷ XX, Việt Nam đã có một lớp thanh niên ưu tú rời đất nước ra đi vì khát vọng giành lại độc lập cho Tổ quốc, tự do và phẩm giá cho đồng bào. Số đông nô nức Đông du theo lời kêu gọi đầy nhiệt huyết của Phan Bội Châu. Duy chỉ có thầy giáo Nguyễn Tất Thành dám một mình sang phương Tây..." +
    "Đầu thế kỷ XX, Việt Nam đã có một lớp thanh niên ưu tú rời đất nước ra đi vì khát vọng giành lại độc lập cho Tổ quốc, tự do và phẩm giá cho đồng bào...Đầu thế kỷ XX, Việt Nam đã có một lớp thanh niên ưu tú rời đất nước ra đi vì khát vọng giành lại độc lập cho Tổ quốc, tự do và phẩm giá cho đồng bào. Số đông nô nức Đông du theo lời kêu gọi đầy nhiệt huyết của Phan Bội Châu. Duy chỉ có thầy giáo Nguyễn Tất Thành dám một mình sang phương Tây..." +
    "Đầu thế kỷ XX, Việt Nam đã có một lớp thanh niên ưu tú rời đất nước ra đi vì khát vọng giành lại độc lập cho Tổ quốc, tự do và phẩm giá cho đồng bào...Đầu thế kỷ XX, Việt Nam đã có một lớp thanh niên ưu tú rời đất nước ra đi vì khát vọng giành lại độc lập cho Tổ quốc, tự do và phẩm giá cho đồng bào. Số đông nô nức Đông du theo lời kêu gọi đầy nhiệt huyết của Phan Bội Châu. Duy chỉ có thầy giáo Nguyễn Tất Thành dám một mình sang phương Tây..."
};

const hotPosts = [
    {
        id: 1,
        title: "Bài viết 1"
    },
    {
        id: 2,
        title: "Bài viết 2"
    },
    {
        id: 3,
        title: "Bài viết 3"
    },
    {
        id: 4,
        title: "Bài viết 4"
    },
    {
        id: 5,
        title: "Bài viết 5"
    }
];

const LectureDetail = () => {
    const { id:lectureId } = useParams();
    console.log(lectureId);
    return (
        <div className="lecture-detail">
            <div className="lecture-detail__left">
                <div className="lecture-detail__video">
                    <iframe className="lecture-detail__video__iframe"
                        title="lecture-detail"
                        src={lectureDetail.videoUrl}
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="lecture-detail__title">
                    {lectureDetail.title}
                </div>
                <div className="lecture-detail__action">
                    <Link to={"/posts"} className="lecture-detail__btn">
                        <FontAwesomeIcon icon={faComments} />
                        Diễn đàn
                    </Link>
                </div>
                <div className="lecture-detail__content">
                    {lectureDetail.content}
                </div>
                <div className="lecture-detail__hot-post">
                    <h2 className="lecture-detail__hot-post__heading">Bài viết nổi bật</h2>
                    <div className="lecture-detail__hot-post__list">
                        {hotPosts.map((post) => (
                            <div className="lecture-detail__hot-post__item">
                                <Link to={"/posts/" + post.id + "/comments"} className="lecture-detail__hot-post__item-link">
                                    {post.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lecture-detail__right">
                <div className="lecture-detail__relatedVideo">
                    <h2 className="lecture-detail__relatedVideo-heading">Bài giảng liên quan</h2>
                    <div className="lecture-detail__relatedVideo-list">
                        {relatedLectures.map((lecture) => (
                            <RelatedLecture lecture={lecture} />
                        ))}
                        <button className="lecture-detail__relatedVideo-btn">Xem thêm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LectureDetail;