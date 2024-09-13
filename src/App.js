// import './App.css';
// import React from 'react';
// import NavBar2 from './Components/NavBar2';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Hemanth from './Hemanth';
// import Html from './Components/Html';
// import Footer from './Components/Footer';
// import SearchBar from './Components/SearchBar';
// import ProfileBar from './Components/ProfileBar';
// import DashBoard from './DashBoard';
// function App() {
//   return (
//     <>

//       <Router>

//       <div className='w-full'>

//       <ProfileBar/>
//       </div>
//       {/* <NavBar/> */}
//           <div className='sticky top-0 z-999'>
//             <NavBar2 />
//           </div>
//         <Routes>
//             <Route path='/main' element={<Html/>} > </Route>
//             <Route path='/search' element={<SearchBar/>} > </Route>
//             <Route path='/' element={<Hemanth/>}></Route>
//             <Route path='/dashboard' element={<DashBoard/>}></Route>
//         </Routes>

//         <Footer/>
//        </Router>

//     </>
//   );
// }

// export default App;



import './App.css';
import React from 'react';
import NavBar2 from './Components/NavBar2';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hemanth from './Hemanth';
import Html from './Components/Html';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import ProfileBar from './Components/ProfileBar';
// import DashBoard from './DashBoard';
import Home from "./pages/home/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./FormSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { AuthContext } from './context/AuthContext';
import DashNavbar from './Components/dashnavbar/DashNavbar';
import Courses from './Components/Courses';
import Payment from './Components/Payment';
function App() {
  const { darkmode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to={"/dashboard/login"} />
  }
  // console.log(currentUser);
  return (
    <>


      <Router>

        <div className='w-full'>

          {/* <ProfileBar /> */}
          <DashNavbar />
        </div>
        {/* <NavBar/> */}
        <div className='top-0 z-999 overflow-x-scroll'>
          <NavBar2 />
        </div>

        <Routes>
          <Route path='/main' element={<RequireAuth><Html /></RequireAuth>} > </Route>
          <Route path='/search' element={<SearchBar />} > </Route>
          <Route path='/' element={<RequireAuth><Hemanth /></RequireAuth>}></Route>
          <Route path='/courses' element={<RequireAuth><Courses /></RequireAuth>} />
          <Route path='/payment' element={<RequireAuth><Payment /></RequireAuth>} />
        </Routes>
        <div className={darkmode ? "app dark" : "app"}>
          <Routes>
            <Route path="/dashboard">
              <Route path="login" element={<Login />} />
              <Route index element={<RequireAuth><Home /></RequireAuth>} />
              <Route path="users">
                <Route index element={<RequireAuth><List /></RequireAuth>} />
                <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>} />
                <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              </Route>
              <Route path="products">
                <Route index element={<RequireAuth><List /></RequireAuth>} />
                <Route path=":productId" element={<RequireAuth><Single /></RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Add New Product" /></RequireAuth>} />
              </Route>
            </Route>

          </Routes>
        </div>

        <Footer />
      </Router>

    </>
  );
}

export default App;



