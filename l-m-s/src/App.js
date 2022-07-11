import logo from "./logo.svg";
import "./App.css";
import "./Components/styles.css";
import Login from "./Components/Login";
import BatchList from "./Components/Admin/BatchList";
import "antd/dist/antd.css";
import NavBar from "./Components/Admin/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MentorList from "./Components/Admin/MentorList";
import Requests from "./Components/Admin/Requests";
import MentorHeader from "./Components/Mentor/MentorHeader";
import Batch from "./Components/Mentor/Batch";
import Dashboard from "./Components/Mentor/Dashboard";
import { SideBar } from "./Components/Admin/sidebar";
import { Content } from './Components/Admin/Content';
import { Header} from './Components/Admin/Header'
import MentorEmployeeList from './Components/Mentor/MentorEmployeeList';
import Primary_Info from './Components/Employee/Primary_Info';
function App() {
  return (
    <div>
       {/* <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/batchlist" element={<BatchList />} />
          <Route path="/mentorlist" element={<MentorList />} />
          <Route path="/requests" element={<Requests />} />
        </Routes>
      </BrowserRouter> */}
       {/* <BrowserRouter>
      <MentorHeader/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/batch' element={<Batch/>}/>
        <Route path='/MentorEmployeeList' element={<MentorEmployeeList/>}/>


      </Routes>
      </BrowserRouter> */}

      <Primary_Info/>

    </div>
    
  );
}

export default App;
