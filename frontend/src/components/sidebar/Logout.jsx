import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";
const Logout = () => {
  const {loading, logout} = useLogout();
  return (
    <div className="mt-auto pt-2">
      {!loading ? (
        <CiLogout className="w-6 h-6 text-white cursor-pointer"
        onClick={logout} />
      ) : (
        <span className="loading-spinner loading"></span>
      )}
    </div>
  );
};

export default Logout;
