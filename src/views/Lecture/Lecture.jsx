import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Lecture.css";
import { LectureItemThumb } from "../../components";
import LeftNav from "../containers/LeftNav/LeftNav";

import bgImg from "../../assets/images/bg.png";


 // fake data In a separate file or within the same file, create a mock data array
//  const mockLectures = [
//     {
//         id: 1,
//         title: "Introduction to React",
//         thumbnail: "url_to_thumbnail_image_1",
//     },
//     {
//         id: 2,
//         title: "State Management in React",
//         thumbnail: "url_to_thumbnail_image_2",
//     },
//     {
//         id: 3,
//         title: "State Management in React",
//         thumbnail: "url_to_thumbnail_image_2",
//     },
//     {
//         id: 4,
//         title: "State Management in React",
//         thumbnail: "url_to_thumbnail_image_2",
//     },
// ];

// const mockTopicsList = [
//     {
//         name: "Topic 1",
//         lectures: [
//             {
//                 id: 1,
//                 title: "Introduction to React",
//                 thumbnail: "url_to_thumbnail_image_1",
//             },
//             {
//                 id: 2,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//         ],
//     },
//     {
//         name: "Topic 2",
//         lectures: [
//             {
//                 id: 3,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//             {
//                 id: 4,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//         ],
//     },
//     {
//         name: "Topic 3",
//         lectures: [
//             {
//                 id: 5,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//             {
//                 id: 6,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//         ],
//     },
//     {
//         name: "Topic 4",
//         lectures: [
//             {
//                 id: 7,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//             {
//                 id: 8,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//         ],
//     },
//     {
//         name: "Topic 5",
//         lectures: [
//             {
//                 id: 9,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//             {
//                 id: 10,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//         ],
//     },
//     {
//         name: "Topic 6",
//         lectures: [
//             {
//                 id: 11,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//             {
//                 id: 12,
//                 title: "State Management in React",
//                 thumbnail: "url_to_thumbnail_image_2",
//             },
//         ],
//     },
// ];

const Lecture = () => {
    const navigate = useNavigate();
    const [lectures, setLectures] = useState([]);

    // const [lectures, setLectures] = useState(mockLectures);
    const handleClickLectureItem = (lectureId) => {
        navigate(`/lectures/${lectureId}`);
    }

    const backgroundImageUrl = "../../assets/images/bg.png";

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
        <div className="lecture"
            style={{
                backgroundImage: `url("${backgroundImageUrl}")`,
                backgroundSize: 'cover',

            }}
        >
            
            {/* Topic session */}
            <div className="px-32 py-8">
                <h2 class="font-bold text-4xl py-8 mr-auto mt-16">
                    <a>Topic 1</a>
                </h2>
               
                <div className="lecture-list">
                    {
                        lectures.map((lecture) => {
                            return <LectureItemThumb lecture={lecture} key={lecture.id} onClick={handleClickLectureItem} />
                        })
                    }
                </div>
            </div>

            <div className="px-32 py-8">
                <h2 class="font-bold text-4xl py-8 mr-auto mt-16">
                    <a>Topic 2</a>
                </h2>
               
                <div className="lecture-list">
                    {
                        lectures.map((lecture) => {
                            return <LectureItemThumb lecture={lecture} key={lecture.id} onClick={handleClickLectureItem} />
                        })
                    }
                </div>
            </div>

            <div className="px-32 py-8">
                <h2 class="font-bold text-4xl py-8 mr-auto mt-16">
                    <a>Topic 3</a>
                </h2>
               
                <div className="lecture-list">
                    {
                        lectures.map((lecture) => {
                            return <LectureItemThumb lecture={lecture} key={lecture.id} onClick={handleClickLectureItem} />
                        })
                    }
                </div>
            </div>

            <div className="px-32 py-8">
                <h2 class="font-bold text-4xl py-8 mr-auto mt-16">
                    <a>Topic 4</a>
                </h2>
               
                <div className="lecture-list">
                    {
                        lectures.map((lecture) => {
                            return <LectureItemThumb lecture={lecture} key={lecture.id} onClick={handleClickLectureItem} />
                        })
                    }
                </div>
            </div>

            <div className="px-32 py-8">
                <h2 class="font-bold text-4xl py-8 mr-auto mt-16">
                    <a>Topic 5</a>
                </h2>
               
                <div className="lecture-list">
                    {
                        lectures.map((lecture) => {
                            return <LectureItemThumb lecture={lecture} key={lecture.id} onClick={handleClickLectureItem} />
                        })
                    }
                </div>
            </div>

            <div className="px-32 py-8">
                <h2 class="font-bold text-4xl py-8 mr-auto mt-16">
                    <a>Topic 5</a>
                </h2>
               
                <div className="lecture-list">
                    {
                        lectures.map((lecture) => {
                            return <LectureItemThumb lecture={lecture} key={lecture.id} onClick={handleClickLectureItem} />
                        })
                    }
                </div>
            </div>
           

        </div>
    );
}

export default Lecture;