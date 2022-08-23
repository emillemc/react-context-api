import { AuthProvider } from "./contexts/AuthProvider";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
}

export default App;
