import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Login from "./Login";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(

  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/Product" element={<Product/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Login" element={<Login/>}/>
   
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  
);