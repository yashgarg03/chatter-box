import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleRadioButtonChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    // console.log(loading);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md
      bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-15"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 pt-4">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2 pt-4">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2 pt-4">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="flex justify-between">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-primary"
                  checked={inputs.gender === "Male"}
                  onChange={() => handleRadioButtonChange("Male")}
                />
                <span className="label-text m-3">Male</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-primary"
                  checked={inputs.gender === "Female"}
                  onChange={() => handleRadioButtonChange("Female")}
                />
                <span className="label-text m-3">Female</span>
              </label>
            </div>
          </div>
          <div>
            <button
              className="btn btn-outline btn-primary btn-block btn-sm mt-3"
              disabled={loading}
            >
              {loading ? (
                <span className="loading-spinner loading"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          <div className="flex mt-3 gap-1 justify-center">
            <span className="text-sm mt-2 inline-block">
              {"Already have an account?"}
            </span>
            <Link
              to={"/login"}
              className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
