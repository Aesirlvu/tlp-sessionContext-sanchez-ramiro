import { SessionProvider } from "./context/SessionProvider";
import useSession from "./hooks/useSession";
import "./index.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function AppContent() {
  const { sessionState } = useSession();
  return sessionState.isAuthenticated ? <HomePage /> : <LoginPage />;
}

function App() {
  return (
    <SessionProvider>
      <AppContent />
    </SessionProvider>
  );
}

export default App;
