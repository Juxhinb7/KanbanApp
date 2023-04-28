import Tasks from "./Tasks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faDiagramProject, faListCheck, faTableColumns, faFile, faCalendar, faDiagramNext} from '@fortawesome/free-solid-svg-icons'
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Milestones from "./Milestones";
import Reports from "./Reports";
import Calendar from "./Calendar";

const Content = (props: any) => {
    return (
                <div id="sidePanel">
                    <ul>
                        <Link to="/"><li><FontAwesomeIcon icon={faHouse}/> Home</li></Link>
                        <Link to="projects"><li><FontAwesomeIcon icon={faDiagramProject} /> Projects</li></Link>
                        <Link to="milestones"><li><FontAwesomeIcon icon={faListCheck} /> Milestones</li></Link>
                        <Link to="board"><li><FontAwesomeIcon icon={faTableColumns} /> Board</li></Link>
                        <Link to="reports"><li><FontAwesomeIcon icon={faFile} /> Reports</li></Link>
                        <Link to="calendar"><li><FontAwesomeIcon icon={faCalendar}/> Calendar</li></Link>
                    </ul>
                </div>
    );
}

export default Content;