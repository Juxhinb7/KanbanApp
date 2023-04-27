import Tasks from "./Tasks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faDiagramProject, faListCheck, faTableList } from '@fortawesome/free-solid-svg-icons'

const Wrapper = (props: any) => {
    return (
        <div id="wrapper">
            <header>
                <h1>{props.name}</h1>
            </header>
            <div id="main">
                <div id="sidePanel">
                    <ul>
                        <li><FontAwesomeIcon icon={faHouse}/> Home</li>
                        <li><FontAwesomeIcon icon={faDiagramProject} /> Projects</li>
                        <li><FontAwesomeIcon icon={faListCheck} /> Milestones</li>
                        <li><FontAwesomeIcon icon={faTableList} /> Tasks</li>
                        <li>Reports</li>
                        <li>Calendar</li>
                    </ul>
                </div>
                <Tasks />
            </div>
            
        </div>
    );
}

export default Wrapper;