import React, { useContext } from "react";

import SignRoutes from "./SignRoutes";
import OtherRoutes from "./OtherRoutes";
import { AuthContext } from "../contexts/AuthContext";

const Routes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated === true ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;
