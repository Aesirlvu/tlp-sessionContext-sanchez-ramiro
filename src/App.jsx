import Login from "./components/Login";
import { SessionProvider } from "./context/SessionProvider";
import "./index.css";

function App() {
  return (
    <>
      <SessionProvider>
        <Login /> {/* children prop*/}
      </SessionProvider>
    </>
  );
}

export default App;
