import './App.css';
import Navbar from "./Components/NavBar/Navbar.js";
import About from "./Components/About/About.js";
import Footer from "./Components/Footer/Footer.js";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./Components/Home.js";
import BookingPage from "./Components/BookingPage/BookingPage.js";

function App() {
  return (
    <>
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/reservations"} element={<BookingPage/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;
