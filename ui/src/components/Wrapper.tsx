import Tasks from "./Tasks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faDiagramProject, faListCheck, faTableColumns, faFile, faCalendar, faDiagramNext} from '@fortawesome/free-solid-svg-icons'

const Wrapper = (props: any) => {
    return (
        <div id="wrapper">
            <header>
                <h1><FontAwesomeIcon icon={faDiagramNext}/> {props.name}</h1>
            </header>
            <div id="main">
                <div id="sidePanel">
                    <ul>
                        <li><FontAwesomeIcon icon={faHouse}/> Home</li>
                        <li><FontAwesomeIcon icon={faDiagramProject} /> Projects</li>
                        <li><FontAwesomeIcon icon={faListCheck} /> Milestones</li>
                        <li><FontAwesomeIcon icon={faTableColumns} /> Tasks</li>
                        <li><FontAwesomeIcon icon={faFile} /> Reports</li>
                        <li><FontAwesomeIcon icon={faCalendar}/> Calendar</li>
                    </ul>
                </div>
                <Tasks />
            </div>
            
        </div>
    );
}

export default Wrapper;