import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './Exam.css';

const API_KEY = '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';

const Exam = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState(-1); // 1 for correct, 0 for incorrect, -1 for not attempted
    const [showNext, setShowNext] = useState(true);
    const [showPrevious, setShowPrevious] = useState(false);
    const [typing, setTyping] = useState(false);
    const [gptAnswer, setGptAnswer] = useState('');

    async function processMessageToChatGPT(message) {
        let chatMessage = {
            role: 'user',
            content: message,
        }
    
        const systemMessage = {
            role: 'system',
            content: 'Explaining the answer to the user',
        }
    
        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [systemMessage, chatMessage],
        }
    
        await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
            setTyping(false);
            setGptAnswer(data.choices[0].message.content)
        })
    }

    useEffect(() => {
        const quests = [
            {
                question: "Tháng 8 - 1945 điều kiện khách quan bên ngoài rất thuận lợi tạo thời cơ cho nhân dân ta vùng lên giành lại độc lập đó là:",
                options: [
                            "Sự thất bại của phe phát xít trên chiến trường châu Âu.",
                            "Sự đầu hàng của phát xít Italia và phát xít Đức.",
                            "Sự tan rã của phát xít Đức và sự đầu hàng vô điều kiện của phát xít Nhật.",
                            "Sự thắng lợi của phe Đồng Minh."
                        ],
                answer: "Sự tan rã của phát xít Đức và sự đầu hàng vô điều kiện của phát xít Nhật.",
            },
            {
                question: "Cuối tháng 8/1945, Quân đội của các nước nào đã có mặt trên lãnh thổ Việt Nam ?",
                options: [
                            "Anh, Pháp.",
                            "Anh, Trung Hoa Dân quốc.", 
                            "Nhật, Pháp.", 
                            "Pháp, Trung Hoa Dân quốc."
                        ],
                answer: "Nhật, Pháp.",
            },
            {
                question: "Thuận lợi cơ bản của nước Việt Nam Dân chủ Cộng hoà sau tháng 8/1945 là:",
                options: [
                            "Ta đã nắm chính, quyền trên tất cả các tỉnh thành trong cả nước; Đảng Cộng sản Liên Xô và Quốc tế III tích cực ủng hộ, giúp đỡ.", 
                            "Nhân dân ta đã giành được quyền làm chủ, rất gắn bó, ủng hộ chế độ mới ; cách mạng thế giới cũng phát triển theo hướng có lợi cho ta.", 
                            "Cách mạng nước ta được sự ủng hộ nhiệt liệt của các nước trong phe xã hội chù nghĩa.", 
                            "Tất cả các ý trên."
                        ],
                answer: "Nhân dân ta đã giành được quyền làm chủ, rất gắn bó, ủng hộ chế độ mới ; cách mạng thế giới cũng phát triển theo hướng có lợi cho ta.",
            },
            {
                question: "Cuộc tập dượt đầu tiên của Đảng và quần chúng chuẩn bị cho Cách mạng Tháng Tám năm 1945 là",
                options: [
                            "Phong trào dân tộc dân chủ 1936-1939.", 
                            "Phong trào cách mạng 1930-1931.", 
                            "Cao trào kháng Nhật cứu nước 1945.", 
                            "Cuộc vận động giải phóng dân tộc 1939-1945."
                        ],
                answer: "Phong trào cách mạng 1930-1931.",
            },
            {
                question: "Phong trào dân chủ 1936-1939 ở Việt Nam là một bước chuẩn bị cho thắng lợi của Cách mạng Tháng Tám năm 1945 vì đã",
                options: [
                            "Đưa Đảng Cộng sản Đông Dương ra hoạt động công khai.", 
                            "Khắc phục triệt để hạn chế của Luận cương chính trị Tháng 10/1930.", 
                            "Bước đầu xây dựng lực lượng vũ trang nhân dân.", 
                            "Xây dựng được lực lượng chính trị quần chúng đông đảo."
                        ],
                answer: "Xây dựng được lực lượng chính trị quần chúng đông đảo.",
            }
        ];
        setQuestions(quests);
    }, []);

    const resetResult = () => {
        document.querySelectorAll('.option').forEach((el) => {
            el.classList.remove('correctBorder');
            el.classList.remove('incorrectBorder');
        });
        setResult(-1);
        setGptAnswer('');
    }

    return (
        <div className="exam">
            <div className="exam-container">
                <div className="exam-header">
                    <Link to={`../lectures/${id}`} className="exam-title">Quay lại bài giảng</Link>
                    <div className="exam-action">
                        {
                            showPrevious ? <button className="exam-action-btn previous" onClick={() => {
                                setCurrentQuestion(currentQuestion - 1);
                                resetResult();
                                setShowNext(true);
                                if (currentQuestion > 1) {
                                    setShowPrevious(true);
                                } else {
                                    setShowPrevious(false);
                                }
                            }}>Trước</button> : <div className="exam-action-btn disable previous">Trước</div>
                        }
                        {
                            showNext ? <button className="exam-action-btn next" onClick={() => {
                                setCurrentQuestion(currentQuestion + 1);
                                resetResult();
                                setShowPrevious(true);
                                if (currentQuestion < questions.length - 2) {
                                    setShowNext(true);
                                } else {
                                    setShowNext(false);
                                }
                            }}>Tiếp</button> : <div className="exam-action-btn disable next">Tiếp</div>
                        }
                    </div>
                </div>
                {
                    questions.length > 0 && questions.map((question, index) => {
                        return (
                            <div key={index} className={`question ${currentQuestion === index ? 'active' : ''}`}>
                                <h2 className="question-title">{question.question}</h2>
                                <div className="options">
                                    {
                                        question.options.map((option, index) => {
                                            return (
                                                <div 
                                                    key={index} 
                                                    className="option"
                                                    onClick={(p) => {
                                                    document.querySelectorAll('.option').forEach((el) => {
                                                        el.classList.remove('correctBorder');
                                                        el.classList.remove('incorrectBorder');
                                                    });
                                                    if (option === question.answer) {
                                                        setResult(1);
                                                        p.target.classList.add('correctBorder');
                                                    } else if (option !== question.answer) {
                                                        setResult(0);
                                                        p.target.classList.add('incorrectBorder');
                                                    }
                                                    if (currentQuestion < questions.length - 1) {
                                                        setShowNext(true);
                                                    }
                                                }}>{option}</div>
                                            );
                                        })
                                    }
                                </div>
                                <div className="result">
                                    {
                                        result === 1 ? <div className="correct">Đúng rồi</div> : result === 0 ? <div className="incorrect">Sai rồi</div> : null
                                    }
                                    {
                                        result === 0 ? <div className="correct-answer"><span className="correct">Đáp án đúng:</span> {question.answer}</div> : null
                                    }
                                    {
                                        result === 1 || result === 0 ? 
                                        (
                                            <button 
                                                className="explain"
                                                onClick={() => {
                                                    setTyping(true);
                                                    const questionContent = question.question + '\n'
                                                    + question.options.join('\n')
                                                    + '\nĐáp án là: ' + question.answer
                                                    + '\nGiải thích cho tôi về đáp án này được không?';
                                                    processMessageToChatGPT(questionContent);
                                                }}
                                            >Giải thích</button>

                                        )
                                        : null
                                    }
                                    {
                                        typing ? <div className="typing">Đang trả lời...</div> : null
                                    }
                                    {
                                        gptAnswer ? <div className="gpt-answer">{gptAnswer}</div> : null
                                    }
                                </div>
                            </div>
                        );
                    }
                    )
                }
            </div>
        </div>
    );
}

export default Exam;