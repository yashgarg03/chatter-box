const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md
      bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-15"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
        </h1>

        <form>
          <div>
            <label className="label p-2 pt-4">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
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
            />
          </div>
          <div className="flex justify-between">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-primary"
                  checked
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
                />
                <span className="label-text m-3">Female</span>
              </label>
            </div>
          </div>
          <div>
            <button className="btn btn-outline btn-primary btn-block btn-sm mt-3">
              Sign Up
            </button>
          </div>
          <div className="flex mt-3 gap-1 justify-center">
            <span className="text-sm mt-2 inline-block">
              {"Already have an account?"}
            </span>
            <a
              href=""
              className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
