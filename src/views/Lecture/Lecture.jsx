import React from "react";
import { useNavigate } from "react-router-dom";
import "./Lecture.css";
import { LectureItemThumb } from "../../components";

const lectures = [
    {
        id: 1,
        title: "Chiến thắng Điện Biên Phủ 1954 - ý nghĩa lịch sử và giá trị thời đại",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg",
    },
    {
        id: 2,
        title: "Cách mạng Tháng Tám",
        thumbnail: "https://tuyengiao.hagiang.gov.vn/upload/64711/20220818/Nhan_dan_ta_vui_mung_phan_khoi_sau_Cach_mang_Thang_8_f411f.jpg",
    },
    {
        id: 3,
        title: "Chiến dịch Điện Biên Phủ",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg",
    },
    {
        id: 4,
        title: "Cách mạng Tháng Tám",
        thumbnail: "https://tuyengiao.hagiang.gov.vn/upload/64711/20220818/Nhan_dan_ta_vui_mung_phan_khoi_sau_Cach_mang_Thang_8_f411f.jpg",
    }
];

const Lecture = () => {
    const navigate = useNavigate();
    const handleClickLectureItem = (lectureId) => {
        navigate(`/lectures/${lectureId}`);
    }

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