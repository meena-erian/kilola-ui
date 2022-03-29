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
import { Wrapper } from "@googlemaps/react-wrapper";
import { Loading } from './views';


function GoogleMap(props) {
  const render = (status) => {
    return <Loading msg={`Google Maps ${status}`} />
  };
  return (
    <Wrapper apiKey={"AIzaSyClWKWXZr4ntb-flOJOcT0ln9tFmz_mo94"} render={render}>
      {props.children}
    </Wrapper>
  )
}

function App() {
  return (
    <GoogleMap>
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
    </GoogleMap>
  );
}

export default App;
