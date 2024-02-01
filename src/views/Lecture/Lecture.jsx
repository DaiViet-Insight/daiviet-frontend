import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Lecture.css";
import { LectureItemThumb } from "../../components";

const Lecture = () => {
    const navigate = useNavigate();
    const [lectures, setLectures] = useState([]);

    const handleClickLectureItem = (lectureId) => {
        navigate(`/lectures/${lectureId}`);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://20.236.83.109:3000/api/lectures");
                const data = await response.json();
                data.map((item) => {
                    let lecture = {
                        id: item.id,
                        title: item.title,
                        thumbnail: item.thumbnail,
                    };
                    setLectures((lectures) => [...lectures, lecture]);
                });
                console.log(data);
            }
            catch (error) {
                console.log("error", error);
            }
        }
        fetchData();
    }
    , []);

    return (
        <div className="lecture">
            <div className="lecture-list">
                {
                    lectures.map((lecture) => {
                        return <LectureItemThumb lecture={lecture} key={lecture.id} onClick={handleClickLectureItem} />
                    })
                }
            </div>
        </div>
    );
}

export default Lecture;