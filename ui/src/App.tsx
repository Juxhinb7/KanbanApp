import React from 'react';
import "./App.css";
import "./components/css/Wrapper.css";
import "./components/css/Calendar.css";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Milestones from "./components/Milestones";
import Tasks from "./components/Tasks";
import Reports from "./components/Reports";
import Calendar from "./components/Calendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiagramNext} from '@fortawesome/free-solid-svg-icons';
import SidePanel from "./components/SidePanel";


function App() {
  return (
    <div id="wrapper">
      <header>
                <h1><FontAwesomeIcon icon={faDiagramNext}/> KanbanApp</h1>
            </header>
            <div id="main">
              <SidePanel />
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="projects" element={<Projects />}/>
                <Route path="milestones" element={<Milestones />}/>
                <Route path="board" element={<Tasks />}/>
                <Route path="reports" element={<Reports />}/>
                <Route path="calendar" element={<Calendar />}/>
              </Routes>
                
            </div>
    </div>
            
              
            
            
  );
}

export default App;
 