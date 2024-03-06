import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState();
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        if(!invalidateInputs(username, password)) { return; }
        
        try {
            setLoading(true);
            const res = await fetch("/api/auth/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, login };
}

export default useLogin

function invalidateInputs(username, password) {
    if(!username || !password) {
        toast.error("Please fill all required fields");
        return false;
    }
    else if(password.length < 8){
        toast.error("Password must be at least 8 characters long");
        return false;
    }
    return true;
}