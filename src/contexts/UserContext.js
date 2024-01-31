import React from "react";
import { useState, useContext } from "react";

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children, model }) {
    const [isShowAuthModal, setIsShowAuthModal] = useState(false);
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
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