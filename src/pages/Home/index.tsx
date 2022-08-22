import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Home = () => {
  const router = useNavigate();
  const { Logout } = useAuth();

  async function handleLogout() {
    Logout();
    router("/")
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;