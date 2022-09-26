import AuthProvider from "./context/auth-context";
import { Routes } from "./routes";

import "./App.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
