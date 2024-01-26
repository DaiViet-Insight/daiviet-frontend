import React from "react";
import { useState, useEffect } from "react";
import { useUser } from "../../../contexts/UserContext";
import './AuthenticationForm.css';

const typeForm = {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER"
}

const AuthenticationForm = () => {
    const { setIsShowAuthModal } = useUser();

    const [isShowing, setIsShowing] = useState(false);
    const [type, setType] = useState(typeForm.LOGIN);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    useEffect(() => {
        setIsShowing(true);
    }, []);

    return (
        <div className="authentication-form-container">
            <div 
                className="authentication-form__opacity"
                onClick={() => {setIsShowAuthModal(false)}}
            ></div>
            <div className={"authentication-form__outer" + (isShowing && " isShowing")}>
                {
                    type === typeForm.LOGIN ?
                    (<div className="authentication-form">
                    <div className="authentication-form__title">
                        <h1>Đăng nhập</h1>
                    </div>
                    <div className="authentication-form__input">
                        <input 
                            type="text" 
                            name="username" 
                            value={username} 
                            onChange={(e) => {setUsername(e.target.value)}}
                            placeholder="Tên người dùng" 
                        />
                        <input 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            placeholder="Mật khẩu" 
                        />
                    </div>
                    <div className="authentication-form__btn-forgotPass">
                        <button>Quên mật khẩu?</button>
                    </div>
                    <button className="authentication-form__button">Đăng nhập</button>
                    <div className="authentication-form__action">
                        <span>Chưa có tài khoản?</span>
                        <button
                            onClick={() => {
                                setUsername("");
                                setPassword("");
                                setRePassword("");
                                setType(typeForm.REGISTER);
                            }}
                        >Đăng ký</button>
                    </div>
                    </div>) :
                    (<div className="authentication-form">
                    <div className="authentication-form__title">
                        <h1>Đăng ký</h1>
                    </div>
                    <div className="authentication-form__input">
                        <input 
                            type="text" 
                            name="username" 
                            value={username}
                            onChange={(e) => {setUsername(e.target.value)}}
                            placeholder="Tên người dùng" 
                        />
                        <input 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            placeholder="Mật khẩu" 
                        />
                        <input 
                            type="password" 
                            name="password" 
                            value={rePassword}
                            onChange={(e) => {setRePassword(e.target.value)}}
                            placeholder="Nhập lại mật khẩu" 
                        />
                    </div>
                    <button className="authentication-form__button">Đăng ký</button>
                    <div className="authentication-form__action">
                        <span>Đã có tài khoản?</span>
                        <button
                            onClick={() => {
                                setUsername("");
                                setPassword("");
                                setRePassword("");
                                setType(typeForm.LOGIN);
                            }}
                        >Đăng nhập</button>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default AuthenticationForm;