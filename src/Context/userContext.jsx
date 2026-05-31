import { createContext, useEffect, useState } from "react";

export const tokenContext = createContext();

export default function UserContextProvider({ children }) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const userToken = localStorage.getItem("userToken");
        setToken(userToken);
    }, []);

    return (
        <tokenContext.Provider value={{ token, setToken }}>
            {children}
        </tokenContext.Provider>
    );
}