import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Components from "./pages/Components";
import Forms from "./pages/Forms";
import Tables from "./pages/Tables";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AdminPanel from "./pages/AdminPanel";


function App() {
  return (
   <AdminPanel/>
   
  );
}

export default App;
