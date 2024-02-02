import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './LectureDetail.css'
import { RelatedLecture } from "../../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

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
    const [lectureDetail, setLectureDetail] = useState({});
    const [relatedLectures, setRelatedLectures] = useState([]);

    useEffect(() => {
        const fetchRelatedLectures = async (eventIds) => {
            try {
                setRelatedLectures([]);
                const response = await fetch("http://20.236.83.109:3000/api/lectures");
                const data = await response.json();
                data.map((item) => {
                    let lecture = {
                        id: item.id,
                        title: item.title,
                        thumbnail: item.thumbnail,
                    };
                    if (lecture.id !== lectureId)
                        setRelatedLectures((relatedLectures) => [...relatedLectures, lecture]);
                }
                );
            }
            catch (error) {
                console.log("error", error);
            }
        }

        const fetchData = async () => {
            try {
                const response = await fetch("http://20.236.83.109:3000/api/lectures/" + lectureId);
                const data = await response.json();
                let eventIds = data.Events?.map(event => event.id);
                if (eventIds.length > 0) {
                    fetchRelatedLectures(eventIds);
                }
                setLectureDetail({
                    id: data.id,
                    title: data.title,
                    videoURL: data.videoURL,
                    content: data.content,
                    eventId: eventIds
                });
            }
            catch (error) {
                console.log("error", error);
            }
        }
        

        fetchData();
    }, [lectureId]);

    return (
        <div className="lecture-detail">
            <div className="lecture-detail__left">
                <div className="lecture-detail__video">
                    <iframe className="lecture-detail__video__iframe"
                        title="lecture-detail"
                        src={lectureDetail.videoURL}
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="lecture-detail__title">
                    {lectureDetail.title}
                </div>
                <div className="lecture-detail__action">
                    <Link to={`/lectures/${lectureDetail.id}/exam`} className="lecture-detail__btn">
                        <FontAwesomeIcon icon={faBookOpenReader} />
                        Ôn tập bài giảng
                    </Link>
                    <Link to={"/posts"} className="lecture-detail__btn">
                        <FontAwesomeIcon icon={faComments} />
                        Diễn đàn
                    </Link>
                </div>
                <div 
                    className="lecture-detail__content"
                    dangerouslySetInnerHTML={{ __html: lectureDetail.content }}
                >
                </div>
                <div className="lecture-detail__hot-post">
                    <h2 className="lecture-detail__hot-post__heading">Bài viết nổi bật</h2>
                    <div className="lecture-detail__hot-post__list">
                        {hotPosts.map((post) => (
                            <div className="lecture-detail__hot-post__item" key={post.id}>
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
                        {relatedLectures.map((lecture, index) => (
                            <RelatedLecture lecture={lecture} key={index} />
                        ))}
                        <button className="lecture-detail__relatedVideo-btn">Xem thêm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LectureDetail;