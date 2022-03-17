import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { 
  Home,
  Privacy,
  Terms,
  SignIn,
  SignUp,
  CopyRight,
  ForgotPassword
} from './views'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/copyright" element={<CopyRight />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
