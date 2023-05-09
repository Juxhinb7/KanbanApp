import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencil, faTrashCan} from "@fortawesome/free-solid-svg-icons";
const TSXCard = (props: any) => {
    return (
        <div id={props.id} className="card" draggable="true" onDragStart={props.handleDragStart} onDragOver={props.onDragOver}>
            <li style ={{listStyleType: "none"}} key={props.id}><div id="id">{props.id}</div><div id="title">{props.title}</div>
                <div id="prio" style={{backgroundColor: props.COLORS[props.prio]}}>{props.PRIORITIES[props.prio]}</div>
                <button className="card-button edit" type="button" onClick={() => props.editItem(props.id, props.title, props.description, props.prio, props.process)}><FontAwesomeIcon icon={faPencil} id="pencil"/></button>
                <button className="card-button remove" type="button" onClick={() => props.removeItem(props.id, props.process)}><FontAwesomeIcon icon={faTrashCan} id="trash"/></button>
            </li>
        </div>
    )
}

export default TSXCard;