import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, gender, confirmPassword }) => {
        const success = handleInputError({ fullName, username, password, gender, confirmPassword });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName, username, password, gender, confirmPassword })
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // localStorage
            localStorage.setItem("chat-user", JSON.stringify(data));

            // setContext
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }

    }
    return { loading, signup }
}

export default useSignup

function handleInputError({ fullName, username, password, gender, confirmPassword }) {
    if (!fullName || !username || !password || !gender || !confirmPassword) {
        toast.error('Please fill all required fields');
        return false;
    }
    else if (password !== confirmPassword) {
        toast.error('Passwords should match!');
        return false;
    }
    else if (password.lenght < 8) {
        toast.error('Password should be at least 8 characters long!');
        return false;
    }
    return true;
}
