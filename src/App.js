import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Cart from "./Pages/Cart/Cart";
import MyNav from "./components/MyNav";
import { useUserAuth } from "./hooks/useAuthContext";
import Startup from "./Pages/Startup/Startup";

function App() {
  const { authIsReady, user } = useUserAuth();
  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <MyNav />
          <Routes>
            <Route path="/" element={user ? <Startup /> : <Signup />} />
            <Route path="/home" element={user ? <Home /> : <Signin />} />
            <Route path="/cart" element={user ? <Cart /> : <Signin />} />
            <Route path="/signin" element={!user ? <Signin /> : <Startup />} />
            <Route path="/signup" element={!user ? <Signup /> : <Startup />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
