import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectRoute = ({ children }) => {
  if (!Cookies.get("access_token")) {
    return <Navigate to={"/"} />;
  }
  return children;
};
export default ProtectRoute;
