import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children, model }) {
    const navigator = useNavigate();
    const [isShowAuthModal, setIsShowAuthModal] = useState(false);
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigator('/lectures');
    }

    return (
        <UserContext.Provider 
            value={{ 
                user,
                login,
                logout,
                isShowAuthModal,
                setIsShowAuthModal
            }}
        >
        {
            children
        }
        {
            isShowAuthModal && (
                model
            )
        }
        </UserContext.Provider>
    );
}