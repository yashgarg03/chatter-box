import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md
      bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-15"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login 
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 pt-4">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2 pt-4">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
          <button
              className="btn btn-outline btn-primary btn-block btn-sm mt-3"
              disabled={loading}
            >
              {loading ? (
                <span className="loading-spinner loading"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
          <div className="flex mt-3 gap-1 justify-center">
            <span className="text-sm mt-2 inline-block">
              {"Don't have an account?"}
            </span>
            <Link to={'/signup'}
              className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
