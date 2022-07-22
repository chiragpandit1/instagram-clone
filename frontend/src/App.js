import Navbar from "./Components/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";

//importing the screens:
import Home from "./Components/Screens/Hoe";
import Login from "./Components/Screens/Login";
import Profile from "./Components/Screens/Profile";
import Signup from "./Components/Screens/Signup";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route path = "/login">
        <Login/>
      </Route>
      <Route path = "/Profile">
        <Profile/>
      </Route>
      <Route path = "/signup">
        <Signup />
      </Route>
    </BrowserRouter>
  );
}

export default App;
